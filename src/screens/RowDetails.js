import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native'

class RowDetails extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
   
      };
      
    }
    render() {
    const { route } = this.props
    const { item } = route.params
    const { navigate } = this.props.navigation
    var width = Dimensions.get('window').width
    var height = Dimensions.get('window').height


      return (
          <View style = {styles.container}>
              <View style = {styles.topHalf}>
                <Image source = {{uri: item.imageUrl}} style = {{alignSelf: 'stretch', height: height*0.40, marginBottom: 5}}></Image>
              </View>
              <View style = {styles.bottomHalf} > 
                <Text style = {styles.text}>{item.title}</Text>
                <Text style = {styles.createdOnText}>{item.createdOn}</Text>
                <Text style = {styles.description}>{item.description}</Text>
              </View>
          </View>
      )
    }
}


const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      alignSelf: 'stretch',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#ebebeb',
      borderWidth: 3,
      borderColor:"red"
    },
    topHalf: {
        alignSelf: 'stretch',
        height: '40%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ebebeb',
        borderWidth: 3,
        borderColor:"blue"
      },
      bottomHalf: {
        flex: 1,
        justifyContent: 'flex-start',
        
        width:'100%',
        backgroundColor: '#ebebeb',
        borderWidth: 3,
        borderColor:"green"
      },
      text: {
        textAlign: 'left',
        fontSize: 40,
        margin: 10,
        fontWeight: 'bold',
      },
      createdOnText: {
        textAlign: 'left',
        fontSize: 30,
        marginLeft: 10,
        fontWeight: 'bold',
      },
      description: {
        textAlign: 'left',
        fontSize: 20,
        margin: 10,
        fontWeight: 'bold',
      }

})

export default RowDetails