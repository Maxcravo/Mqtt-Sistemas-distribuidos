require('dotenv').config();

const express = require('express');
const mqtt = require('mqtt');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());


const client = mqtt.connect(process.env.CLUSTER_URL, {
    username: process.env.CLUSTER_USERNAME,
    password: process.env.PASSWORD,
});

client.on("connect", () => {
    console.log("Conectado");
});

client.on("reconnect", () => {
    console.log("Reconnect");
});

client.on("disconnect", () => {
    console.log("disconnect");
});


client.on("close", () => {
    console.log("close");
});


app.get('/unripe', (req, res) => {
    client.subscribe("unripe", () => {
        console.log("Ouvindo o tópico unripe");
        // client.unsubscribe("unripe");     
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
        // client.unsubscribe("ripe");     
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
        // client.unsubscribe("rotten");     
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

    const reqObject = {
        topic: req.body.topic,
        message: req.body.message,
    };
    client.publish(reqObject.topic, reqObject.message, { qos: 0, retain: false }, (error) => {
        if (error) {
            console.error(error)
        }
})
        
})


const port = process.env.PORT || 8000;
const ipv4 = process.env.IP; // ipv4

app.listen(port, ipv4, () => {
    console.log("server on");
});