import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { Tabs } from "expo-router/tabs";
import { useEffect, useState } from "react";
import * as Font from 'expo-font';
import { clientes } from "../../src/services/db/database";

// fetch('https://mywebsite.com/endpoint/', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     firstParam: 'yourValue',
//     secondParam: 'yourOtherValue',
//   }),
// });


const componentClient = (
  { name = "", direction = "", colonia = "", producto = [] },
  index
) => (
    <View key={"card-"+index} style={styles.clientList}>
      <Text style={styles.lineText}>Nombre: {name}</Text>
      <View style={styles.lineText}>
        <Text>Calle: {direction}</Text>
        <Text>Colonia: {colonia}</Text>
      </View>
      <View style={styles.lineText}>
        <Text>Productos:[{producto.length}]
          {producto.join("").length >= 15
            ? producto.join(" ").slice(0, 13) + "..."
            : producto.join(" ")}
        </Text>
      </View>
      <View
      style={{
        borderBottomColor: "#000",
        borderBottomWidth: 1,
        alignSelf: "stretch",
      }}
    />
    </View>

);

export default function HomePage() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadCustomFont() {
      await Font.loadAsync({
        'mi-fuente': require('../../src/assets/font/PixelifySans-Regular.ttf'), // Reemplaza con la ubicación de tu archivo de fuente
      });
      setFontLoaded(true);
    }

    loadCustomFont();
  }, []);
  if (!fontLoaded) {
    return null; // Puedes mostrar una pantalla de carga aquí
  }
  return (
    <ScrollView style={styles.clientCard}>
      {clientes.map(componentClient)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  clientCard: {
    flex: 1,
    minWidth:"100%",
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent:"stretch",
    gap: 5,
    padding: 12,
  },
  clientList: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent:"center",
    gap: 5,
    padding: 24,
  },
  lineText: {
    width:"100%",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap:5,
    // fontFamily: 'mi-fuente',
    // fontSize: 24
  }
});
