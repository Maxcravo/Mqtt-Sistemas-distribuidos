const express = require('express');
const mqtt = require('mqtt');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const client = mqtt.connect('mqtt:/54bbec565e8c455e825d334236179365.s2.eu.hivemq.cloud', {
    username: 'gpbezerra',
    password: 'Gpbezerr4a'
});

client.on("connect", () => {
    console.log("Conectado");
    
});

app.get('/unripe', (req, res) => {
    client.subscribe("unripe", () => {
        console.log("Ouvindo o tópico unripe");
        client.unsubscribe("unripe");     
    });

    client.on('message', (topic, message) => {
        if (topic )
        console.log(`Tópico: ${topic} | Messagem: ${message.toString()}`)
    })

    res.send("Fruta Verde");
})

app.get('/ripe', (req, res) => {    

    client.subscribe("ripe", () => {
        console.log("Ouvindo o tópico ripe");
        client.unsubscribe("ripe");     
    });

    client.on('message', (topic, message) => {
        if (topic )
        console.log(`Tópico: ${topic} | Messagem: ${message.toString()}`)
    })

    res.send("Fruta madura");
})

app.get('/rotten', (req, res) => {
    client.subscribe("rotten", () => {
        console.log("Ouvindo o tópico rotten");
        client.unsubscribe("rotten");     
    });

    client.on('message', (topic, message) => {
        if (topic )
        console.log(`Tópico: ${topic} | Messagem: ${message.toString()}`)
    })

    res.send("Fruta podre")
})

// Ajustar função para verificar qual topico será publicado e qual a mensagem que foi enviada
app.post('/messageFruit', (req, res) => {
    console.log(req.body);

    // const message = req.body.message;
    //     client.publish("unripe", message, { qos: 0, retain: false }, (error) => {
    //         if (error) {
    //             console.error(error)
    //         }
    //     })
        
})


const port = 3000;
const ipv4 = "192.168.3.93"

app.listen(port, ipv4, () => {
    console.log("server on");
});