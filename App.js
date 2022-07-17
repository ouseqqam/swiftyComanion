import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator,ScrollView } from "react-native";
import { CLIENT_ID, SECRET_ID } from "@env";
import { useEffect, useState } from "react";
import axios from "axios";
import Navigator from "./routes/stack";



export default function App() {
  return (
        <Navigator />
  );
}