import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator,ScrollView } from "react-native";
import { CLIENT_ID, SECRET_ID } from "@env";
import { useEffect, useState } from "react";
import Profil from "./Profil";
import axios from "axios";

const url1 = "https://api.intra.42.fr/oauth/token"
const ddd = {
  grant_type:"client_credentials",
  client_id: CLIENT_ID,
  client_secret: SECRET_ID,
}


export default function Profil2({route}) {
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState("");
  const [project, setProject] = useState([])
  const [skill, setSkill] = useState()
  const [user, setUser] = useState()

  const url = "https://api.intra.42.fr/v2/users/" + route.params
  useEffect(() => {
    axios.post(url1,ddd).then((response) => {
      setToken(response.data.access_token)
      const config = {
        headers: {
          'Authorization': 'Bearer '+ response.data.access_token
        },
      };
  
      axios.get(url, config).then((response) => {
        let cursus = response.data.cursus_users
        let level = 0
        for (let i = 0; i < cursus.length; i++)
          if ( cursus[i]['cursus_id'] == 21) {
            level = cursus[i]['level']
            break
          }
        setUser({
          fullName: response.data.usual_full_name,
          login: response.data.login,
          email: response.data.email,
          mobile: response.data.phone,
          img: response.data.image_url,
          level: level,
          location: (response.data.location) ? {etat: "available", loc:response.data.location} : {etat: "unavailable", loc: '-'}
        })
        let projects = response.data.projects_users
        setProject([])
        for (let i = 0; i < projects.length; i++)
          if (projects[i].project.parent_id == null && projects[i].status == "finished" && projects[i].cursus_ids[0] != 6 && projects[i].cursus_ids[0] != 9) {
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
          if (skills[i]['cursus_id'] == 21) {
            setSkill(skills[i]['skills'])
          }
        setLoading(false)
      }).catch(error => console.log(error.response?.data))
    })
  }, []);
  return (
    loading ? <ActivityIndicator color="white" /> :
        <ScrollView>
          <Profil user = {user} project = {project} skills = {skill} />
        </ScrollView>
  );
}