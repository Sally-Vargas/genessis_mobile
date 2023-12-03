import { Button, Text, View } from "react-native";
import { useAuth } from "../../context/AuthProvider";
import { Tabs } from "expo-router";
import LoginPage from "../login/Login";

export default function NavigatorLogged() {
    const { user, login, logout } = useAuth();
    
  return (
    <>
    {
    user ? 
    <Tabs 
    screenOptions={{
      headerStyle: {
        backgroundColor: '#54511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Tabs.Screen
        // Name of the route to hide.
        name="index"
        options={{
          // This tab will no longer show up in the tab bar.
          href: null,
        }}
        
      />
    </Tabs>
    : 
    <LoginPage />
    }
      
    </>
  );
}

