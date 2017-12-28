import {
    reaction,
    observable,
    computed,
    autorun,
    action,
  } from 'mobx';

class MainStore {
  
    @observable myName = 'keanu'
    @observable myNumber = 0
    @observable myOperand = 0
    
    //diff style
    @observable calculatorValues = {
          'number' : "0",
          'operand' : 0,
          'operator':'',
          'total' : 0,
    }

    updateName(newName){
      this.myName = newName
    }
    
    updateNumber(newNumber){
        this.myNumber = newNumber        
    }

    updateOperand(newOperand){
      this.myOperand = newOperand
    }

    totalNumber(){
      this.myNumber += this.myOperand
    }

    //diff style
    @action updateNumberProp(number) {
      if(this.calculatorValues.number == "0"){
        this.calculatorValues.number = number
      }else{
        this.calculatorValues.number += number
      }
      console.log('@action | Update number | number : ', this.calculatorValues.number)
    }
    
    @action updateOperandProp(operand) {
      this.calculatorValues.operand = operand
      console.log('@action | Update operand | operand : ', this.calculatorValues.operand)
    }

    @action updateOperatorProp(operator) {
      this.calculatorValues.operator = operator
      console.log('@action | Update operator | operator : ', this.calculatorValues.operator)
    }

    @action updateTotalProp(number, operand, operator) {
      switch(operand){
        case '+':
          this.calculatorValues.total = number + operator
          break;
        case 'x':
          this.calculatorValues.total = number * operator
          break;
        case '/':
          this.calculatorValues.total = number / operator
          break;
        case '-':
          this.calculatorValues.total = number - operator
          break;
        default:
          break;
      }
      console.log('@action | Update total | total : ', this.calculatorValues.total)
    }
}

export default new  MainStore()