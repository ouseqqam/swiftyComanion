import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import { useEffect, useState } from "react";


export default function Search() {
  const [username, setUsername] = useState("")
  const changeHandler = (val) => {
    setUsername(val)
}
  return (
    <View style={styles.container}>
      <Image style= {styles.img} source= {{uri: "../images/OIP.jpg"}} />
      <TextInput style = {styles.input}
        placeholder = "Username"
        placeholderTextColor = "black"
        maxLength={13}
        onChangeText={changeHandler}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  input: {
    width: 300,
    borderColor: "grey",
    borderWidth: 2,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    padding: 10,
    backgroundColor:'white'
  },
  img: {
    width: 55,
    height: 55
  }
});