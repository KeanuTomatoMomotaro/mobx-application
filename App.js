import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MainStore from './Model/MainStore';
import {observer} from 'mobx-react';

@observer
export default class App extends React.Component {
  constructor(props){
    super(props)
  }

  handlePress(){
    const store = MainStore
    console.log("name is",store.myName)  
    store.updateName("KEANU_888")
    console.log("name is now",store.myName)
  }

  handlePressSum(){
    const store = MainStore
    console.log("number is ",store.myNumber)  
    store.sumNumber(2)
    console.log("Number is now",store.myNumber)
  }

  render() {
    const store = MainStore
    return (
      <View>
        <TouchableOpacity style={{backgroundColor:'blue', height:100, width:100}} onPress={this.handlePress}></TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'red', height:100, width:100}} onPress={this.handlePressSum}></TouchableOpacity>
        <Text>{store.myName}</Text>        
        <Text>{store.myNumber}</Text>        
      </View>
    );
  }
}