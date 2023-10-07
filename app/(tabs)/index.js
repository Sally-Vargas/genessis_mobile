import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { Tabs } from "expo-router/tabs";

const clientes = [
  {
    name: "vanessa le puche",
    direction: "le tonch 109",
    colonia: "Nuevo Escobedo",
    producto: ["pomada", "mascarilla"],
  },
  {
    name: "pata",
    direction: "patata 101",
    colonia: "Nuevo Escobedo",
    producto: ["pomada", "mascarilla"],
  },
  {
    name: "le piche",
    direction: "la pinchitas 79",
    colonia: "Nuevo Escobedo",
    producto: ["pomada", "mascarilla"],
  },
  {
    name: "vanessa",
    direction: "le tonch 109",
    colonia: "CROC",
    producto: ["pomada", "mascarilla"],
  },
  {
    name: "pata",
    direction: "patata 101",
    colonia: "CROC",
    producto: ["pomada", "mascarilla"],
  },
  {
    name: "le piche",
    direction: "la pinchitas 79",
    colonia: "CROC",
    producto: ["pomada", "mascarilla"],
  },
  {
    name: "vanessa",
    direction: "le tonch 109",
    colonia: "CROC",
    producto: ["pomada", "mascarilla"],
  },
  {
    name: "pata",
    direction: "patata 101",
    colonia: "CROC",
    producto: ["pomada", "mascarilla"],
  },
  {
    name: "le piche",
    direction: "la pinchitas 79",
    colonia: "CROC",
    producto: ["pomada", "mascarilla"],
  },
  {
    name: "vanessa",
    direction: "le tonch 109",
    colonia: "CROC",
    producto: ["pomada", "mascarilla"],
  },
  {
    name: "pata",
    direction: "patata 101",
    colonia: "CROC",
    producto: ["pomada", "mascarilla"],
  },
  {
    name: "le piche",
    direction: "la pinchitas 79",
    colonia: "CROC",
    producto: ["pomada", "mascarilla", "gel ajo"],
  },
];

const componentClient = (
  { name = "", direction = "", colonia = "", producto = [] },
  index
) => (
    <View key={"card-"+index} style={styles.clientList}>
      <Text style={styles.lineText}>Nombre: {name}</Text>
      <View style={styles.lineText}>
        <Text>calle: {direction}</Text>
        <Text>colonia: {colonia}</Text>
      </View>
      <View style={styles.lineText}>
        <Text>productos:[{producto.length}]
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
  return (
    <ScrollView style={styles.clientCard}>
      {clientes.map(componentClient)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  clientCard: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    gap: 5,
    padding: 12,
  },
  clientList: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems:"stretch",
    alignSelf:"stretch",
    justifyContent:"center",
    gap: 5,
    padding: 24,
  },
  lineText: {
    width:"100%",
    flex: 1,
    flexDirection: "row",
    alignItems:"stretch",
    alignContent:"stretch",
    gap:5,
  }
});
