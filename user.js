const user = {
    name: 'Kalmutskyi Dmitrii', 
    age: 18 
  }
  //експортувати з модуля об'єкт user та функцію 
  module.exports = {
    user: user,
    sayHello() {
      console.log ('Hello')
    }  
  }  