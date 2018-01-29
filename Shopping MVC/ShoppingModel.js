function ShoppingModel() {
  this.allItems = new Array();
  this.changeListeners = new Array();

  this.addNewItem = function(addable) { //addable element is object include name and price in ShoppingItem.js
    this.allItems.push(addable); //addable are element pushed to allItems array
    this.notifyChange();
  }

  this.notifyChange = function() {
    this.changeListeners.forEach(function(changeListener){
      //changeListener are element in array changeListeners, netx line 18
      changeListener(); //changeListener element is function so it can excute as a function
    });
  }

  this.addNewListener = function(newListener) {
    this.changeListeners.push(newListener); //newListener are function in ViewController.js that pushed to array changeListeners
  }
}
