var listModel = new ListModel();
addListener();

function addPerson() {
  var name = document.getElementById("nameInput").value;
  var listPer = new ListPerson(name);   //add name to listPerson

  listModel.addToList(listPer);   //add new name from listPerson.js to array in listModel.js
}

function addListener() {
  listModel.addNewListener(updateList);   //add new function listener 'updateList' to array in listModel
}

function updateList() {
  var list = document.getElementById('list');
  list.innerHTML = "";
  //write all person name from array allPerson to <p> id="list"
  listModel.allPerson.forEach(function(elePerson){
    list.innerHTML += "<br>" + elePerson.name;    //each name element from array is written on each line
  });
}
