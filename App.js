import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.first} >
        <Text>im first</Text>    
      </View>
      <View style={styles.second}>
           <Text>me second</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  first:{
    flex:1,
    backgroundColor:"red"
  },
  second:{
    flex:3,
    backgroundColor:"orange"
  }
});
