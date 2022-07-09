import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator,ScrollView } from "react-native";
import { CLIENT_ID, SECRET_ID } from "@env";
import { useEffect, useState } from "react";
import Profil from "./Components/Profil";
import axios from "axios";
import Navigator from './routes/stack';
import Search from "./Components/Search";

const url1 = "https://api.intra.42.fr/oauth/token"
const ddd = {
  grant_type:"client_credentials",
  client_id: CLIENT_ID,
  client_secret: SECRET_ID,
}
const url = "https://api.intra.42.fr/v2/users/ouseqqam"

export default function App() {
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState("");
  const [project, setProject] = useState([])
  const [skill, setSkill] = useState()
  const [user, setUser] = useState()
  useEffect(() => {
    axios.post(url1,ddd).then((response) => {
      setToken(response.data.access_token)
      const config = {
        headers: {
          'Authorization': 'Bearer '+ response.data.access_token
        },
      };
  
      axios.get(url, config).then((response) => {
        setUser({
          fullName: response.data.usual_full_name,
          login: response.data.login,
          email: response.data.email,
          mobile: response.data.phone,
          img: response.data.image_url,
          level: (response.data.cursus_users[0]['grade'] == 'Member') ? response.data.cursus_users[0]['level']: response.data.cursus_users[2]['level'],
          location: (response.data.location) ? {etat: "available", loc:response.data.location} : {etat: "unavailable", loc: '-'}
        })
        let projects = response.data.projects_users
        setProject([])
        for (let i = 0; i < projects.length; i++)
          if (projects[i].project.parent_id == null && projects[i].status == "finished" && projects[i].cursus_ids[0] != 6) {
            setProject((prevProject) => {
              return [
                ...prevProject,
                {id: projects[i].id, name: projects[i].project.name, grade: projects[i].final_mark}
              ]
            })
          }
          let skills = response.data.cursus_users
        setSkill([])
        for (let i = 0; i < skills.length; i++)
          if (skills[i].grade == 'Member') {
            setSkill(skills[i]['skills'])
          }
        setLoading(false)
      }).catch(error => console.log(error.response?.data))
    })
  }, []);
  return (
        <Navigator />
  );
}