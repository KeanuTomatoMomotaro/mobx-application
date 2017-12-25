import {
    reaction,
    observable,
    computed,
    autorun,
    action,
  } from 'mobx';

class MainStore {
  
    @observable myName = 'keanu'
    
    updateName(newName){
      this.myName = newName
    }
  
}

export default new  MainStore()