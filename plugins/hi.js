var function sendMessage("hi");
const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');
const fs = require('fs');
    
    Asena.addCommand({pattern: 'hi', fromMe: true, desc: 'just for fun'}, (async (message, match) => {    
            await message.client.sendMessage(message.jid, await sendMessage(), MessageType.text);
        }
    ));