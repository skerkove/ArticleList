import React, { Component, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image, TextInput } from 'react-native'
import myData from '../data/toDo_list.json'



class ToDoListItem extends Component {
  

  render() {
    return (
      <View style = {styles.listRow} >
      <View style = {{flex:1}}>
        <Text  style = {{fontWeight: 'bold', marginLeft: 5}}>{this.props.item.taskText}</Text>
        <Text style = {{flexShrink: 1, flexWrap: 'wrap', margin:5, fontSize:10}}>{this.props.item.createdAt}</Text>
      </View>
      </View>
    )
  }
}


class ToDo extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      taskText: "",
      id:"",
      createdAt: ""
  
    };
    
  }
  generateKey = (numberOfCharacters) => {
      return require('random-string')({length: numberOfCharacters});
  }
  getCurrentDate=()=>{

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return year + '/' + month + '/' + date; //format: dd-m-yyyy;
}

  render() {
    const { route } = this.props
    const { item } = route.params
    const { name } = item
    // const { navigate } = this.props.navigation    -> if we want to navigate to another screen

  return (
    <View style={styles.container}>
      <Text style={styles.text}>To-Do List</Text>
      <View style={styles.container2}>
        <View style={styles.card1}>
          <Text style={styles.cardText}>Add Task:</Text>
          <TextInput 
          onChangeText={(text) => this.setState({ taskText: text }) } 
        
          style={styles.input} />
        </View>
        <TouchableOpacity 
        onPress={() => {
            if (this.state.taskText.length == 0){
                alert("you must enter a task")
                return
            }
            const newKey = this.generateKey(24)
            const newTask = {
                "taskText": this.state.taskText,
                "id": newKey,
                "createdAt": this.getCurrentDate()
            };
            myData.toDo_list.push(newTask) //pull to refresh results
            
        }}
        style={styles.card2}>
          <Text style={styles.cardText}>+</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container3}>
          <FlatList
            data={myData.toDo_list} 
            keyExtractor = { (item) => item.id.toString() }
            renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <ToDoListItem item = {item}>
                </ToDoListItem>
              </TouchableOpacity>
            )
            }}
          />
        </View>
    </View>
  )
}


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  container2: {
    width: 350,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  container3: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    textDecorationLine: "underline",
    flexWrap: 'wrap'
  },
  card1: {
    flex: 1,
    height: 75,
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: 'black',
    marginRight: 5,
    marginVertical: 5,
    padding: 10,
    alignItems: 'center'
  },
  card2: {
    // width: 350,
    height: 75,
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: 'green',
    marginLeft: 5,
    marginVertical: 5,
    padding: 10,
    alignItems: 'center'
  },
  
  cardText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 5,
    flexShrink: 1,
    flexWrap: 'wrap',
    fontWeight: "bold",
  },
  listRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    width: 350,
    backgroundColor: "skyblue",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black"
  },
  input: {
      alignSelf: "stretch",
      borderColor: 'white',
      borderWidth: 1,
      padding: 5,
      color: 'white'
    
  }

})

export default ToDo

