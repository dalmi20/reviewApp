import React from 'react'
import { View,Text,StyleSheet } from "react-native";
import { globalStyles } from '../styles/global';
export default function About() {
  return (
    <View style={globalStyles.container}>
       <Text style={globalStyles.titleText}>About</Text>
    </View>
  )
}
