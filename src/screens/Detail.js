import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from 'react-native'


import myData from '../data/article_list.json'


class FlatListItem extends Component {
  

  render() {
    return (
      <View style = {styles.listRow} >
        <Image source = {{uri: this.props.item.imageUrl}} style = {{ borderRadius: 25,width: 50, height: 50, margin: 5}}></Image>
      <View style = {{flex:1}}>
        <Text  style = {{fontWeight: 'bold'}}>{this.props.item.title}</Text>
        <Text style = {{flexShrink: 1, flexWrap: 'wrap', marginVertical:5, fontSize:10}}>{this.props.item.description}</Text>
      </View>
      <View style = {{flex:0}}>
        <Text style = {{fontSize:8, marginHorizontal:5}}>{this.props.item.createdOn}</Text>
      </View>
      </View>
    )
  }
}


class Detail extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      //add state if needed;
    };
    
  }
  render() {
    const { route } = this.props
    const { item } = route.params
    const { name } = item
    const { navigate } = this.props.navigation    

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail Screen</Text>
      <View style={styles.container2}>
        <View style={styles.card1}>
          <Text style={styles.cardText}>Name: {name}</Text>
        </View>
        <TouchableOpacity onPress={() => navigate("ToDo", {item: name})} style={styles.card2}>
          <Text style={styles.cardText2}>ToDo List</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container3}>
          <FlatList
            data={myData.article_list} 
            keyExtractor = { (item) => item.id.toString() }
            renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigate("RowDetails", {item: item})}>
                <FlatListItem item = {item}>
                </FlatListItem>
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
    flex: 0,
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
    flexWrap: 'wrap'
  },
  cardText2: {
    fontSize: 14,
    color: 'white',
    marginBottom: 5,
    flexShrink: 1,
    flexWrap: 'wrap'
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
  }

})

export default Detail


