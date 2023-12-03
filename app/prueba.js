import { Link } from "expo-router";
import { useContext } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../src/context/AuthProvider";
import manageUser from "../src/models/manageUser";

export default function Prueba() {
  const { user, logout } = useAuth();
  const handleLogout = async () =>{
    const User = manageUser()
    User.deleteLogin()
    logout()
  } 

  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello: {JSON.stringify(user)}</Text>
        <Link href="/">inicio</Link>
        <Text>jwt:{user.jwt||'no deberia estar logeado'}</Text>
        <Button title="Cerrar Sesión" onPress = {handleLogout}></Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
