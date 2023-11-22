const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('message', async message => {
    const msg = message.body.toLowerCase()
    const results = msg.split(" ")

	if(results.includes("hola") || results.includes("hi")) {
        client.sendMessage(message.from,'Como estan todos desde mi bot')
	}
    if (results.includes("cursos") || results.includes("curso") || results.includes("materia")) {
        client.sendMessage(message.from,'Los cursos con los que cuenta su grado son\n1. Comunicación\n2. Matematica')
    }
});


client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();
