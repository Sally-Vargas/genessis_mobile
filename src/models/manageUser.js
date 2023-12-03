import { getItemAsync, setItemAsync } from "expo-secure-store";
import { fetchData } from "../assets/fetchData";
import { elapsedTime, toMilliseconds } from "../helpers/time";

// Config
const userConfig = {
  expoSecureUserKey: "loginData",
  timeToExpireConection: 12, //this is in hours
  timeToExpireJwt: 29, //in minutes
  timeToExpireRefreshToken: 7, //in days
};

// constructor login

function manageUser() {
  let username;
  let refreshToken;
  let jwt;
  let lastRefreshTokenUpdate;
  let lastTokenUpdate;

  return {
    // loggin
    login: async (password) => {
      const body = {
        username,
        password,
      };
      const url = "/api/auth/login";
      console.log(body)
      const apiData = await fetchData({ url, method: "post", body });
      if (!apiData) throw Error("login error");
      jwt = apiData.jwt
      refreshToken = apiData.refreshToken;
      lastRefreshTokenUpdate = new Date();
      lastTokenUpdate = new Date();
    },
    getLogin: function () {
      if (!username) return null
      if (this.isRefreshTokenExpire()) return null
      return { username, jwt, lastTokenUpdate };
    },
    loginWithRefreshToken: async () => {
      const headers = {
        refreshToken,
      };
      const url = "/api/auth/refreshtoken";
      console.log(headers)
      const apiData = await fetchData({ url, method: "post", headers });
      console.log('login with refresh token',{apiData})
      if (!apiData) return;
      lastTokenUpdate = new Date();
      jwt = apiData.jwt;
    },
    //manage loggin
    restoreLogin: async function() {
      const { expoSecureUserKey } = userConfig;
      const restoredLogin = await getItemAsync(expoSecureUserKey);
      
      if (!restoredLogin) return;
      
      const userData = JSON.parse(restoredLogin);
      username = userData.username;
      refreshToken = userData.refreshToken;
      lastRefreshTokenUpdate = userData.lastRefreshTokenUpdate;
      // if (!this.isRefreshTokenExpire()) await this.loginWithRefreshToken()
    },
    saveLogin: async () => {
      const { expoSecureUserKey } = userConfig;
      if (!username) throw Error("user not found");
      if (!refreshToken) throw Error("save failed");
      if (!lastRefreshTokenUpdate) throw Error("save failed");
      const user = {
        username,
        refreshToken,
        lastRefreshTokenUpdate,
      };
      await setItemAsync(expoSecureUserKey, JSON.stringify(user));
    },
    deleteLogin: async () =>{
      const { expoSecureUserKey } = userConfig;
      const user = {
        username
      };
      refreshToken=null;
      jwt=null;
      lastRefreshTokenUpdate=null;
      lastTokenUpdate=null;
      const value =username? user:'';
      await setItemAsync(expoSecureUserKey, JSON.stringify(value));
      const restoredLogin = await getItemAsync(expoSecureUserKey);
      console.log(restoredLogin)
    },
    // Token expire
    isJwtExpire: () => {
      if (!lastTokenUpdate) return true;

      // Get the difference in milliseconds
      const elapsedTimeJwt = elapsedTime(lastTokenUpdate);

      const { timeToExpireJwt } = userConfig;

      const timeToExpire = toMilliseconds.minutes(timeToExpireJwt);

      return elapsedTimeJwt > timeToExpire;
    },
    isRefreshTokenExpire: () => {
      if (!lastRefreshTokenUpdate) return true;

      const elapsedTimeRefreshToken = elapsedTime(lastRefreshTokenUpdate);

      const { timeToExpireRefreshToken } = userConfig;

      const timeToExpire =
        toMilliseconds.days(timeToExpireRefreshToken) -
        toMilliseconds.minutes(1);

      return elapsedTimeRefreshToken > timeToExpire;
    },
    isConnectionToServerExpire: () => {
      if (!lastTokenUpdate) return true;

      const elapsedTime = elapsedTime(lastTokenUpdate);

      const { timeToExpireConection } = userConfig;

      const timeToExpire =
        toMilliseconds.hours(timeToExpireConection) - toMilliseconds.minutes(1);

      return elapsedTime > timeToExpire;
    },
    // setters
    setUsername: (newUsername) => (username = newUsername),
    setRefreshToken: (newRefreshToken) => (refreshToken = newRefreshToken),
    setJwt: (newJwt) => (jwt = newJwt),
    setLastTokenUpdate:(newLastTokenUpdate)=> (lastTokenUpdate=newLastTokenUpdate),
    // getters
    getRefreshToken: () => refreshToken,
    getUsername: ()=> username,
    getLastRefreshTokenUpdate: ()=>lastRefreshTokenUpdate,
  };
}

export default manageUser;
