import React, { Component } from 'react'
import { View, Text,styles } from 'react-native';

class SplashScreen extends Component {
    render() {

      return (
        <View style={{flex: 1, backgroundColor:"orange", justifyContent: "center", alignContent: "center"}}>
          <Text style={{color:'white', textAlign:"center", fontWeight: "bold", fontSize: 40}}>
            React Native
          </Text>
        </View>
      );
    }
  }

export default SplashScreen;