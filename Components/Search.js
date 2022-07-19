import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, View, Image, Button, Text } from "react-native";
import { useState } from "react";


export default function Search({navigation}) {
  const [username, setUsername] = useState("")
  const [validUsername, setValidUsername] = useState(true)
  const changeHandler = (val) => {
    setUsername(val.toLowerCase())
  }

  const validateUsername = (username) => {
    const emailRegex = /^[a-z]{2,8}$/
    if (emailRegex.test(username)) {
      navigation.navigate('profil', {username})
      setValidUsername(true)
    }
    else
      setValidUsername(false)
  }


  return (
    
    <View style={styles.container}>
      <View style={styles.container2}>
        <TextInput style = {styles.input}
          placeholder = "Username"
          placeholderTextColor = "black"
          maxLength={13}
          onChangeText={changeHandler}
        />
        <View style = {styles.button} >
          <Button
            color= '#2E4292'
            title="Search"
            onPress={() => validateUsername(username)}
          />
        </View>
      </View>
      <View >
        <Text style={styles.validUsernameText}>{!validUsername ? 'username not valid': null}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2E4292',
  },
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  input: {
    width: 250,
    borderColor: "grey",
    borderWidth: 1,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    padding: 10,
    backgroundColor:'white'
  },
  img: {
    width: 55,
    height: 55
  },
  button: {
    borderColor: "grey",
    borderWidth: 1,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    padding: 7,
    backgroundColor: '#2E4292'
  },
  validUsernameText: {
    color: 'red',
    margin: 5,
    fontSize: 24
  }
});