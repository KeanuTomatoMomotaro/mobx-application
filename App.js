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
    // console.log()
    const store = MainStore
    // console.log
    console.log("name is",store.myName)  
    store.updateName("KEANU_888")
    console.log("name is now",store.myName)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>WOI SINI</Text>
        <TouchableOpacity style={{backgroundColor:'blue', height:200, width:150}} onPress={this.handlePress}></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
