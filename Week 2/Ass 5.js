function addPerson() {
  var persons = document.getElementById("demo");
  var x = document.getElementById("name").value;
  persons.innerHTML += x + '<br>';
}
