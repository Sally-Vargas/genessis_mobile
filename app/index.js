// Alguno de tus componentes donde necesitas la autenticación

import { StyleSheet, View, Text, Button } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';

import { useAuth } from '../context/AuthProvider';

export default function HomeScreen() {
  const { user, login, logout } = useAuth();

  return (
    <View>
      {user ? (
        <>
          <Text>Bienvenido, {user.username}!</Text>
          <Button title="Cerrar Sesión" onPress={logout} />
        </>
      ) : (
        <>
          <Text>Por favor inicia sesión</Text>
          <Button title="Iniciar Sesión" onPress={() => login({ username: 'usuario' })} />
        </>
      )}
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
