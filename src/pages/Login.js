import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../context/AuthProvider";

export default function LoginPage() {
    const { user, login, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text>Por favor inicia sesión ss</Text>
      <Button
        title="Iniciar Sesión"
        onPress={() => login({ username: "usuario" })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
