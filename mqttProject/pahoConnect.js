// import paho from "paho-mqtt";
const paho = require("paho-mqtt");

// aqui estamos conectando nosso app a nosso client que nesse caso é o hiveMQ

let host = "dbea00841afb4de686f0b1a080d6dce3.s2.eu.hivemq.cloud";
let port = 8883;

let client = new paho.Client(
  "broker.hivemq.com", //  Cluster URL 
  1883,
  "/mqtt",
  "clientId" // PORT
);

// Função que vai retornar uma mensagem caso a conexão tenha sido perdida
client.onConnectionLost = (responseObj)=> {
  console.log("Conexão perdida:" + responseObj.errorMessage);
}

// Função que vai retornar uma mensagem caso a conexão tenha êxito e a mensagem tenha sido enviada 
client.onMessageArrived = (message)=>{
  console.log("Message Arrived:" + message.payloadString);
}

// Função que é chamada assim que a conexão é estabelecida
function onConnect(){
  console.log("Conexão realizada com sucesso");
}
// Realizamos a comunicação em sí
client.connect({
  onSuccess: onConnect, // caso a comunicação seja estabelecidade é chamado a função onConnect
  onFailure: console.log("Não foi possível estabelecer uma conexão") 
})