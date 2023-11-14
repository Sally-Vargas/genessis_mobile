import { Tabs } from "expo-router";
import { AuthProvider } from "../src/context/AuthProvider";
import NavigatorLogged from "../src/navigator/navigator";

export default function RootLayout() {
  
  return (
    <AuthProvider>
      <NavigatorLogged />
    </AuthProvider>
  );
}