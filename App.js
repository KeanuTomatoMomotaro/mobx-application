import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
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

  // handlePressEquals(value){
  //   const store = MainStore
  //   store.sumNumber() 
  // }

  handlePressNumber(value){
    const store = MainStore
    if(store.calculatorValues.operator == ""){
      store.updateNumberProp(value)       
    }else{
      store.updateOperandProp(value)             
    }
  }

  handlePressOperand(){
    const store = MainStore
    store.updateOperandProp(2) 
  }

  handlePressOperator(value){
    const store = MainStore
    store.updateOperatorProp(value)
  }

  handlePressEquals(){
    const store = MainStore
    store.updateTotalProp(store.calculatorValues.number, store.calculatorValues.operand, store.calculatorValues.operator)
  }

  handlePressAC(){
    const store = MainStore
    store.updateClearAll()
  }

  render() {
    const store = MainStore
    var {height, width} = Dimensions.get('window')
    return (
      // <View style = {{flex:1, alignItems:'center', justifyContent:'center'}}>
        <View style = {{height: height, width:width, paddingTop: 50}}>
        <View style = {{flex:1, alignItems:'center', justifyContent:'flex-end'}}>          
          <Text>Height is {height}</Text>        
          <Text>Width is {width}</Text>        
          
          <Text>Number is {store.calculatorValues.number}</Text>        
          <Text>Operator is {store.calculatorValues.operator}</Text>      
          <Text>Operand is {store.calculatorValues.operand}</Text>
          <Text>total is {store.calculatorValues.total}</Text>      
            <View style= {{flexDirection:'row'}}>
              <TouchableOpacity style={{backgroundColor:'blue', height:100, width:100}} onPress={this.handlePressAC}></TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'yellow', height:100, width:100}}></TouchableOpacity>  
              <TouchableOpacity style={{backgroundColor:'pink', height:100, width:100}}></TouchableOpacity>  
              <TouchableOpacity style={{backgroundColor:'purple', height:100, width:100}} onPress={() => this.handlePressOperator("/")}></TouchableOpacity>  
            </View>
            <View style= {{flexDirection:'row'}}>
              <TouchableOpacity style={{backgroundColor:'red', height:100, width:100}} onPress={() => this.handlePressNumber("7")}></TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'black', height:100, width:100}} onPress={() => this.handlePressNumber("8")}></TouchableOpacity>  
              <TouchableOpacity style={{backgroundColor:'green', height:100, width:100}} onPress={() => this.handlePressNumber("9")}></TouchableOpacity>  
              <TouchableOpacity style={{backgroundColor:'orange', height:100, width:100}} onPress={() => this.handlePressOperator("x")}></TouchableOpacity>  
            </View>
            <View style= {{flexDirection:'row'}}>
              <TouchableOpacity style={{backgroundColor:'blue', height:100, width:100}} onPress={() => this.handlePressNumber("4")}></TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'yellow', height:100, width:100}} onPress={() => this.handlePressNumber("5")}></TouchableOpacity>  
              <TouchableOpacity style={{backgroundColor:'pink', height:100, width:100}} onPress={() => this.handlePressNumber("6")}></TouchableOpacity>  
              <TouchableOpacity style={{backgroundColor:'purple', height:100, width:100}} onPress={() => this.handlePressOperator("-")}></TouchableOpacity>  
            </View>
            <View style= {{flexDirection:'row'}}>
              <TouchableOpacity style={{backgroundColor:'red', height:100, width:100}} onPress={() => this.handlePressNumber("1")}></TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'black', height:100, width:100}} onPress={() => this.handlePressNumber("2")}></TouchableOpacity>  
              <TouchableOpacity style={{backgroundColor:'green', height:100, width:100}} onPress={() => this.handlePressNumber("3")}></TouchableOpacity>  
              <TouchableOpacity style={{backgroundColor:'orange', height:100, width:100}} onPress={() => this.handlePressOperator("+")}></TouchableOpacity>  
            </View>
            <View style= {{flexDirection:'row'}}>
              <TouchableOpacity style={{backgroundColor:'blue', height:100, width:200}} onPress={() => this.handlePressNumber("0")}></TouchableOpacity>
              {/* <TouchableOpacity style={{backgroundColor:'yellow', height:100, width:100}} onPress={this.handlePressOperatorPlus}></TouchableOpacity>   */}
              <TouchableOpacity style={{backgroundColor:'pink', height:100, width:100}} onPress={()=>this.handlePressNumber(".")}></TouchableOpacity>  
              <TouchableOpacity style={{backgroundColor:'purple', height:100, width:100}} onPress={this.handlePressEquals}></TouchableOpacity>  
            </View>
        </View>
        {/* <TouchableOpacity style={{backgroundColor:'blue', height:100, width:100}} onPress={this.handlePressNumber}></TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'yellow', height:100, width:100}} onPress={this.handlePressOperatorPlus}></TouchableOpacity>  
        <TouchableOpacity style={{backgroundColor:'pink', height:100, width:100}} onPress={this.handlePressOperatorMinus}></TouchableOpacity>  
        <TouchableOpacity style={{backgroundColor:'purple', height:100, width:100}} onPress={this.handlePressOperatorMultip}></TouchableOpacity>  
        <TouchableOpacity style={{backgroundColor:'black', height:100, width:100}} onPress={this.handlePressOperatorDivide}></TouchableOpacity>  
        <TouchableOpacity style={{backgroundColor:'red', height:100, width:100}} onPress={this.handlePressOperand}></TouchableOpacity>  
        <TouchableOpacity style={{backgroundColor:'green', height:100, width:100}} onPress={this.handlePressEquals}></TouchableOpacity>   */}
      </View>
    );
  }
}