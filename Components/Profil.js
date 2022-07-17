import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, View, Image} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components/native";

export default function Profil({ user, project, skills }) {
  if (user && project && skills)
  {
    const a = (user.level - parseInt(user.level)) * 100;
  const Title = styled.Text`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: white;
    background-color: #2e4292;
    width: ${a}%;
    border-radius: 20px;
  `;
  return (
    <View>
      <View style={styles.container}>
        <Image style= {styles.img} source= {{uri: user.img}} />
        <View>
          <View style={styles.user}>
            <AntDesign name="user" size={24} color="black" />
            <Text style={styles.textHeader}>
              {user.fullName} {user.login}
            </Text>
          </View>
          <View style={styles.user}>
            <MaterialIcons name="email" size={24} color="black" />
            <Text style={styles.textHeader}>Email: {user.email}</Text>
          </View>
          <View style={styles.user}>
            <AntDesign name="mobile1" size={24} color="black" />
            <Text style={styles.textHeader}>Mobile: {user.mobile}</Text>
          </View>
          <View style={styles.location}>
            <Text style={styles.textHeader}>{user.location.etat}</Text>
            <Text style={styles.textHeader}>{user.location.loc}</Text>
          </View>
        </View>
      </View>
      <View style= {styles.levelBar}>
        <Title />
        <Text style={styles.level}>{user.level}</Text>
      </View>
      <Text style={styles.title}>Project</Text>
      <View>
        {project.map(test => {
          return (
            <View key={test.id} style= {styles.project}>
              <Text style={styles.titleColor}>{test.name}</Text>
              <Text style={styles.titleColor}>Grade: {test.grade}</Text>
            </View>
          );
        })
        }
      </View>
      <Text style={styles.title}>Skills</Text>
      <View>
        {skills.map(test => {
          return (
            <View key={test.id} style= {styles.project}>
              <Text style={styles.titleColor}>{test.name}</Text>
              <Text style={styles.titleColor}>Level: {test.level}</Text>
              <Text style={styles.titleColor}>pourcentage: {(test.level / 0.3).toFixed(2)} %</Text>
            </View>
          );
        })
        }
      </View>
      <View style={styles.levelBar}>
      </View>
    </View>
  );
  }
  else{
    return (
      <View>
        <Text>Username doesn't exist</Text>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingTop: 20,
    backgroundColor: "#2E4292",
    alignItems: "center",
  },
  textHeader: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    padding: 5,
    fontWeight: 'bold'
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  level: {
    position: 'absolute',
    left: '50%',
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  levelBar: {
    marginTop: 20,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: "#94B8DD",
  },
  user: {
    flexDirection: "row",
  },
  location: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "black",
    marginBottom: 20,
  },
  project: {
    flex:1,
    alignContent: 'space-around',
    paddingVertical: 20,
    paddingLeft: 10,
    margin: 10,
    borderWidth:1,
    borderRadius: 10,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    backgroundColor: '#2e4292'
  },
  title:{
    margin: 20,
    fontSize: 24,
    alignItems: 'center',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  titleColor: {
    color: 'white',
    fontSize: 24,
    alignItems: 'center',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
