const { StatusBar } = require ('expo-status-bar');
const { StyleSheet, Text, View, Button } = require('react-native');
const paho = require("paho-mqtt");

// aqui estamos conectando nosso app ao cliente público MQTT que nesse caso é o hiveMQ
const client = new paho.Client(
  "broker.hivemq.com", //  URL cluster público do HiveMQ 
  8000, // porta 
  "/mqtt", 
  "clientId" //Id do client usando o recomendado pela doc
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
  onSuccess: onConnect // caso a comunicação seja estabelecidade é chamado a função onConnect
})

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Tentando uma comunicação com o MQTT</Text>
      <Button onPress={()=>{ client.connect({onSuccess:onConnect})}}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
