import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { useAuth } from "../../context/AuthProvider";
import { useEffect, useState } from "react";
import img from "../../assets/genessis-del-norte.png";
import FormData from "./components/Form";
import manageUser from "../../models/manageUser";
import { requestLogin } from "./helpers/requestLogin";
import { fetchData } from "../../assets/fetchData";

// Login component
const formUser = {
  username: "Nombre de usuario",
  password: "contraseña",
};
const form = Object.keys(formUser);

const restoreLogin = async ({ login }) => {
  const User = manageUser();
  try {
    await User.restoreLogin();
    await User.loginWithRefreshToken();
    if(User.isRefreshTokenExpire()) return login(null)
    login(User.getLogin());
    console.log("getLogin", User.getLogin());
  } catch (error) {
    console.log(error);
  }
};
// const handledan = async ({login}) =>{
//   const User = manageUser();

// }

const body = {
  username: "bodish",
  password: "michiloco321",
};

export default function LoginPage() {
  const { user, login, logout } = useAuth();
  const [userData, setUserData] = useState(
    body // || { username: "", password: "" }
  );

  const Form = FormData({ userData, setUserData, formUser });
  const requestLoginBtn = requestLogin({ User: manageUser(), login, userData });

  restoreLogin({ login });
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
        {/* <Suspense fallback={<Text>Loading...</Text>}>Solicitud aceptada</Suspense> */}
      </Text>

      {form.map(Form)}

      <Button title="Iniciar Sesión" onPress={requestLoginBtn} />
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
