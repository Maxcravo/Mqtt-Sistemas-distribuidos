const { StyleSheet, Text, View, Button, StatusBar, TouchableHighlight } = require('react-native');

export default function App() {

// Colocar ipv4
const url = ""

async function listenFruit(fruitState) {
  try {
    const response = await fetch(url + fruitState);
    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Arrumar função de postar messagem no tópico

async function sendFruitState(){

  try {
    await fetch(`${url}/messageUnripe`, {
        method: "POST",
        mode: "cors",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: "Fruta está verde"
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

      <TouchableHighlight style ={styles.button}>
        <Button
        onPress={sendFruitState}
        title="Enviar mensagem de fruta verde"
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
    height: 40,
    width:160,
    borderRadius:10,
    marginLeft :50,
    marginRight:50,
    marginTop :20
  }
});
