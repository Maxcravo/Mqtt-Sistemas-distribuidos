require('dotenv/config');

const express = require('express');
const mqtt = require('mqtt');

const app = express();
const cors = require('cors');
app.use(cors());

const client = mqtt.connect(process.env.CLUSTER_URL, {
    username: process.env.CLUSTER_USERNAME,
    password: process.env.PASSWORD
});

client.on("connect", () => {
    console.log("Conectado")
});

app.get('/unripe', (req, res) => {
    client.subscribe("unripe", () => {
        console.log("Ouvindo o tópico unripe");     
    });

    client.on('message', (topic, message) => {
        console.log(`Tópico: ${topic} | Messagem: ${message.toString()}`)
    })

    res.send("Fruta Verde")
})

app.get('/ripe', (req, res) => {    
    res.send("Fruta madura")
})

app.get('/rotten', (req, res) => {
    res.send("Fruta podre")
})

// Publicar mensagem vindo da req para o topico "unripe"
app.post('/messageUnripe', (req, res) => {
    console.log(req.body)
    client.publish("unripe", req, { qos: 0, retain: false }, (error) => {
        if (error) {
            console.error(error)
        }
    })
})

const port = process.env.PORT || 8000;
const url = process.env.URL; // ipv4:port

app.listen(port, url, () => {
    console.log("server on");
});