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

  // handlePressNumber(){
  //   const store = MainStore
  //   store.updateNumber(2) 
  // }

  // handlePressOperand(){
  //   const store = MainStore
  //   store.updateOperand(2) 
  // }

  // handlePressSum(value){
  //   const store = MainStore
  //   store.sumNumber() 
  // }

  handlePressNumber(){
    const store = MainStore
    store.updateNumberProp(2) 
  }

  handlePressOperand(){
    const store = MainStore
    store.updateOperandProp(2) 
  }

  handlePressOperator(){
    const store = MainStore
    store.updateOperatorProp('+')
  }

  handlePressSum(){
    const store = MainStore
    store.updateSumProp(store.calculatorValues.number, store.calculatorValues.operator, store.calculatorValues.operand)
  }

  render() {
    const store = MainStore
    return (
      <View style = {{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Number is {store.calculatorValues.number}</Text>        
        <Text>Operator is {store.calculatorValues.operator}</Text>      
        <Text>Operand is {store.calculatorValues.operand}</Text>
        <Text>Sum is {store.calculatorValues.sum}</Text>              
        <TouchableOpacity style={{backgroundColor:'blue', height:100, width:100}} onPress={this.handlePressNumber}></TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'yellow', height:100, width:100}} onPress={this.handlePressOperator}></TouchableOpacity>  
        <TouchableOpacity style={{backgroundColor:'red', height:100, width:100}} onPress={this.handlePressOperand}></TouchableOpacity>  
        <TouchableOpacity style={{backgroundColor:'green', height:100, width:100}} onPress={this.handlePressSum}></TouchableOpacity>  
      </View>
    );
  }
}