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

    updateName(newName){
      this.myName = newName
    }
    
    sumNumber(operand){
      this.myNumber += operand
    }
}

export default new  MainStore()