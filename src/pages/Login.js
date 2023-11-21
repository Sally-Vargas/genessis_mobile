import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { useAuth } from "../context/AuthProvider";
import { Suspense, useEffect, useState } from "react";
import { fetchSuspenseData } from "../assets/fetchSuspenseData";
import img from "../assets/p2.png";
import { fetchData } from "../assets/fetchData";
import Form, {form} from "../Form/Login";

//constructor login
class User {
  #jwt = "";
  constructor(username, jwt = "") {
    this.username = username;
    this.jwt = jwt;
  }
  set jwt(jwt) {
    this.jwt = jwt;
  }
  set username(username) {
    this.username = username;
  }
  saveUser() {}
}



// Login component

export default function LoginPage() {
  const { user, login, logout } = useAuth();
  const [data, setData] = useState("no data");
  const [jwt, setJwt] = useState({ jwt: "no hay jwt" });

  const requestLogin = async () => {
    const body = {
      username: "bodish",
      password: "michiloco321",
    };
    const url = "/api/auth/login";
    const apiData = await fetchData({ url, method: "POST", body });
    setJwt(apiData);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={img}
        resizeMode="contain"
        placeholder="genessis"
        contentFit="cover"
        transition={1000}
      />

      <Text>
        Iniciar sesión{" "}
        {/* <Suspense fallback={<Text>Loading...</Text>}>{data}</Suspense> */}
        <Suspense fallback={<Text>Loading...</Text>}>{jwt.jwt}</Suspense>
      </Text>

      {form.map(Form)}

      <Button title="Iniciar Sesión" onPress={requestLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    // flex: 1,
    width: "70%",
    height: "30%",
  },
});
