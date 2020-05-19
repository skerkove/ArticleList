import React, { useState, Component } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button } from 'react-native'


//#################################################################################################
// NEED TO MAKE JSON FILE WITH ARRAY OF USERS

// const personInfo = {
//   name: '',
//   password: ''
// }


class Home extends Component {
        
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: "",
        }
    }
render() {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>Login Screen</Text>
        <View style={styles.container2}>
            <View style={styles.inputBlock}>
                <Text style={styles.label}>UserName:</Text>
                <TextInput style={styles.inputText} onChangeText={(name)=>this.setState({name})} value={this.state.name}/>
            </View>
            <View style={styles.inputBlock}>
                <Text style={styles.label}>Password: </Text>
                <TextInput style={styles.inputText} secureTextEntry = {true} onChangeText={(password)=>this.setState({password})} value={this.state.password}/>
            </View>
        </View>
        <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => this._login(this.props)}>
        <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
    </View>
  )
}

// AUTO LOGIN WITH ANY NAME IN THE TEXTINPUT FIELD; 
    _login = async() => {
      const { navigate } = this.props.navigation
            navigate('Detail', { item: this.state })
    }
//#################################################################################################
// CAN IMPLEMENT NAME/PASSWORD CHECK IF MAKE JSON FILE WITH ARRAY OF USERS
  // _login = async() => {
  //   const { navigate } = this.props.navigation
  //     // if(personInfo.name === this.state.name && personInfo.password === this.state.password){
  //         navigate('Detail', { item: this.state })
  //     // } else {
  //         // alert("Name or password is incorrect.")
  //     // }
  // }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "flex-start",
    backgroundColor: 'white'
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    textDecorationLine: "underline",
    
    
  },
  buttonContainer: {
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 10,
    margin: 20
  },
  buttonText: {
    fontSize: 20,
    color: 'white'
  },
  inputBlock : {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    marginBottom: 5,
  },
  inputText : {
    fontSize: 20,
    borderWidth: 1,
    borderColor: "black",
    marginLeft: 30,
    width: 200,
    marginVertical: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
})

export default Home