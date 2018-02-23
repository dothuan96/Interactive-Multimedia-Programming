function ListModel() {
  this.allPerson = new Array();   //array include all person
  this.listeners = new Array();   //array include all function listeners

  this.addToList = function(per) {
    this.allPerson.push(per);

    this.changeListener();
  }

  this.changeListener = function() {
    this.listeners.forEach(function(eleListener){
      eleListener();    //run each function listener in array listeners
    });
  }

  this.addNewListener = function(eleListener){
    this.listeners.push(eleListener);   //push new fuction listener from listController.js to listeners array
  }
}
