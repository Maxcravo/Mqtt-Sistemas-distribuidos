import React, { useState } from 'react';
const config = require('./config').default;
const { StyleSheet, Text, View, Button, StatusBar, TouchableHighlight, TextInput } = require('react-native');

export default function App() {

// Criar objeto data com atributos message e topic. Message vai ser pego do input text e Topic vai ser pego do input selection


const fruitOptions = ["unripe", "ripe", "rotten"]; 

const [data, setData] = useState({
  topic: "",
  message: ""
});

console.log(data)

// Colocar "http://ipv4:porta/" 
const url = "http://192.168.3.93:3000/";


async function listenFruit(fruitState) {
  try {
    const response = await fetch(url + fruitState);
    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

async function sendFruitState(){
  try {
    await fetch(`${url}messageFruit`, {
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json; charset=UTF-8"},
        body: JSON.stringify(data)
    });
  }
  catch (error){
    console.error(error);
  }
}
  return (
    <View style={styles.container}>
      <Text>Tentando uma comunicação com o MQTT</Text>
      <TouchableHighlight style ={styles.button}>
        <Button
        onPress={() => listenFruit("unripe")}
        title="Ouvir fruta verde"
        />
      </TouchableHighlight>

      <TouchableHighlight style ={styles.button}>
        <Button
        onPress={() => listenFruit("ripe")}
        title="Ouvir fruta Madura"
        />
      </TouchableHighlight>

      <TouchableHighlight style ={styles.button}>
        <Button
        onPress={() => listenFruit("rotten")}
        title="Ouvir fruta podre"
        />
      </TouchableHighlight>

      <View style={styles.buttonsContainer}>
        <Button onPress={() => setData({topic: fruitOptions[0], message: data.message})} title="Fruta verde"/>
        <Button onPress={() => setData({topic: fruitOptions[1], message: data.message})} title="Fruta Madura"/>
        <Button onPress={() => setData({topic: fruitOptions[2], message: data.message})} title="Fruta podre"/>
        {/* <Button onPress={handleData(fruitOptions[1], data.message)}/> */}
        {/* <Button onPress={handleData(fruitOptions[2], data.message)}/> */}
      </View>
      <TextInput
        style={styles.input}
        value={data}
        onChangeText={data => setData({topic: data.topic, message: data})}
      />


      <TouchableHighlight style ={styles.button}>
        <Button
        onPress={sendFruitState}
        title="Enviar mensagem para tópico"
        />
      </TouchableHighlight>


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
  button: {
    height: 60,
    width: 160,
    borderRadius:10,
    marginLeft :50,
    marginRight:50,
    marginTop :20
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonsContainer: {
    display: "flex"
  }
});
