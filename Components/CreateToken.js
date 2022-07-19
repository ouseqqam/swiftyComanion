import Profil2 from "./Profil2"
import { CLIENT_ID, SECRET_ID } from "@env";
import { useEffect, useState } from "react";
import axios from "axios";
import { ActivityIndicator } from "react-native";


const url1 = "https://api.intra.42.fr/oauth/token"
const ddd = {
  grant_type:"client_credentials",
  client_id: CLIENT_ID,
  client_secret: SECRET_ID,
}

export default function CreateToken({route}) {
    const [loading, setLoading] = useState(true)
    const [token, setToken] = useState()
    useEffect(() => {
        axios.post(url1,ddd).then((response) => {
            setToken(response.data.access_token)
            setLoading(false)
        })
    }, [])
    return (
        loading ? <ActivityIndicator color="white" /> :
        <Profil2 route={route} token={token} />
    )
}