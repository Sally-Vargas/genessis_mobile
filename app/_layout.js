import { Tabs } from "expo-router";
import { AuthProvider, useAuth } from "../context/AuthProvider";

export default function RootLayout() {
  
  return (
    <AuthProvider>
      <Tabs>
      <Tabs.Screen
        // Name of the route to hide.
        name="index"
        options={{
          // This tab will no longer show up in the tab bar.
          href: null,
        }}
      />
    </Tabs>
    </AuthProvider>
  );
}