//set server
var connection = new WebSocket("wss://obscure-waters-98157.herokuapp.com");

// When the connection is open, send some data to the server
connection.onopen = function () {
  	connection.send('Welcome to chatbox'); // Send the message to the server each time open

    var stt = document.getElementById('status');
    switch (connection.readyState) {
    case WebSocket.CONNECTING:
      stt.innerHTML = 'Connecting...';
      break;
    case WebSocket.OPEN:
      stt.innerHTML = 'Connected!';
      stt.style.color = '#59AE7F';
      break;
    case WebSocket.CLOSING:
      stt.innerHTML = 'Closing...';
      break;
    case WebSocket.CLOSED:
      stt.innerHTML = 'Closed!';
      stt.style.color = '#FF7E55';
      break;
    default:
      stt.innerHTML = 'Unknown';
      break;
  }
};

// Log errors
connection.onerror = function (error) {
  	console.log('WebSocket Error ' + error);
};

// Log messages already existed from the server
connection.onmessage = function (e) {
  	var messages = document.getElementById("chatbox");
  	messages.innerHTML += "<br>" + "Server: " + e.data;
};

function sendMessage(){
	var message = document.getElementById("message").value;
	connection.send(message);
}
