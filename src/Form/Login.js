import { StyleSheet, Text, TextInput, View } from "react-native";

const formUser = {
    username: "Nombre de usuario",
    password: "contraseña",
  };
  
  const form = Object.keys(formUser);

export default function Form(value, index) {
  const propertys = value === "password" ? { secureTextEntry: true } : {};

  return (
    <View style={styles.boxInput} key={index}>
      <Text style={styles.label}>{formUser[value]}</Text>
      <TextInput
        placeholder={"ingrese su " + formUser[value].toLowerCase()}
        {...propertys}
        style={styles.input}
        activeUnderlineColor="blue" //when this TextInput is active, change its accent color to green
        underlineColor="purple" //when inactive, set color to purple
      />
    </View>
  );
};


export {form}

const styles = StyleSheet.create({
    boxInput: {
      width: "100%",
      alignItems: "center",
      // justifyContent: "center",
    },
    input: {
      margin: 10,
      backgroundColor: "gray",
      width: "70%",
    },
    label: {
      color: "rgb(107 114 128)",
      padding: "0",
      margin: "0",
    },
  });