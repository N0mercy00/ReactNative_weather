import React from 'react';
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions={
    Haze:{
        iconName:"weather-hail",
        gradient:["#4DA0B0","#D39D38"],
        title:"Be careful in front",
        subtitle:"It's better to look ahead today.\n"+
        "Be careful driving in the morning"
    },
    Clouds:{
        iconName:"weather-cloudy",
        gradient:["#8360c3","#2ebf91"],
        title:"I like this day",
        subtitle:"Did you see the sky?\n"+
        "it's a dreamy cloud"
    },
    Thunderstorm:{
        iconName:"weather-lightning",
        gradient:["#544a7d","#ffd452"],
        title:"Be careful!!",
        subtitle:"Thor is angry\n"+
        "He must have had a hard day (OoO)"
    },
   
    Rain: {
        iconName:"weather-rainy",
        gradient:["#00B4DB","#0083B0"],
        title:"Don't forget the umbrella",
        subtitle:"if you want me to meet you\n"+
        "you can leave your umbrella\n"+
        "i will go there for you"
    },
    Snow: {
        iconName:"weather-snowy",
        gradient:["#C4E0E5","#4CA1AF"],
        title:"Be careful especially like today",
        subtitle:"if you slips\n"+
        "You will be very painful"
    },
    
    Clear: {
        iconName:"weather-sunny",
        gradient:["#00d2ff","#928DAB"],
        title:"Good morning",
        subtitle:"Did you look out the window?\n"+
        "The weather is so good today"
    },
    Dust: {
        iconName:"weather-cloudy-alert",
        gradient:["#EB5757","#000000"],
        title:"Oh God",
        subtitle:"i really hate 'that' country\n"+
        "Including Wuhan virus ༼ つ ◕_◕ ༽つ"
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
                <View style={styles.under}>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                </View>
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
        flex:2,
        justifyContent:"center",
        alignItems:"center"   
    },
    under:{
        flex:3,
        justifyContent:"center",
        alignItems:"center"  
    },
    textcondition:{
        fontSize:20,
        color:"white"
       
    },
    title:{
        color:"white",
        fontSize:30,
        fontWeight:"100",
        marginBottom:10,
        marginTop:-20
    },
    subtitle:{
        fontWeight:"700",
        color:"white",
        fontSize:20,
        margin:10
    }
});