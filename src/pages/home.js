import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../context/AuthProvider";
import { useEffect } from "react";

export default function HomePage() {
  const { user, login, logout, mode } = useAuth();


  return (
    <View style={styles.dark.container}>
      <Text style={styles[mode].title}>
        Bienvenido hola {mode}, {user.username}!
      </Text>
      <Button title="Cerrar Sesión" onPress={logout} />
    </View>
  );
}
const styles = StyleSheet.create({
  dark: {
    container: {
      flex: 1,
      alignItems: "center",
      padding: 24,
      backgroundColor: '#54511e',
    },
    title: {
      fontSize: 32,
      fontWeight: "bold",
      color: '#9aaed0',
    },
  },
  ligth: {
    container: {
      flex: 1,
      alignItems: "center",
      padding: 24,
      backgroundColor: '#ff511e',
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
      color: '#9aaed0',
    },
    subtitle: {
      fontSize: 36,
      color: "#38434D",
    },
  },
});
