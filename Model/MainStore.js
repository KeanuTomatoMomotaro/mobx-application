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

    updateName(newName){
      this.myName = newName
    }
    
    updateNumber(newNumber){
      this.myNumber = newNumber
    }

    updateOperand(newOperand){
      this.myOperand = newOperand
    }

    sumNumber(){
      this.myNumber += this.myOperand
    }
}

export default new  MainStore()