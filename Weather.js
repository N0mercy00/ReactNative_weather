import React from 'react';
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions={
    Haze:{
        iconName:"weather-hail",
        gradient:["#4DA0B0","#D39D38"]
    },
    Clouds:{
        iconName:"weather-cloudy",
        gradient:["#8360c3","#2ebf91"]
    },
    Thunderstorm:{
        iconName:"weather-lightning",
        gradient:["#544a7d","#ffd452"]
    },
   
    Rain: {
        iconName:"weather-rainy",
        gradient:["#00B4DB","#0083B0"]
    },
    Snow: {
        iconName:"weather-snowy",
        gradient:["#FFEFBA","#FFFFFF"]
    },
    
    Clear: {
        iconName:"weather-sunny",
        gradient:["#4AC29A","#BDFFF3"]
    },
    Dust: {
        iconName:"weather-cloudy-alert",
        gradient:["#EB5757","#000000"]
    },
    
};

export default function Weather({temp,condition}) {
    return (
       
            <LinearGradient
                // Background Linear Gradient
                colors={weatherOptions[condition].gradient} style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <View style={styles.halfcontainer}>
                    <MaterialCommunityIcons 
                    size={96} 
                    name={weatherOptions[condition].iconName} //icon
                    color="white"/>
                    <Text style={styles.textcondition}>Today is {condition}</Text> 
                    <Text style={styles.temp}>{temp}℃</Text>
                </View>
                <View style={styles.halfcontainer}></View>
            </LinearGradient>
      
    );
}

Weather.propTypes={
    temp:PropTypes.number.isRequired,
    condition:PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Dust",
        "Mist"
    ]).isRequired
};

const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp:{
        fontSize:42,
        color:"white"
    },
    halfcontainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"   
    },textcondition:{
        fontSize:20,
        color:"white"
    }
});