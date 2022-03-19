const Asena = require('../Utilis/events');
const { parseGistUrls } = require("../Utilis/Misc")
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');
const fs = require('fs');

Asena.addCommand({pattern: 'gist', fromMe: true, desc: 'testing', dontAddCommandList: true}, (async (message, match) => {
  match = match || message.reply_message.text
   if (!match) {
     return await message.sendMessage("need gist link")
   } else {
     const isValidUrl = parseGistUrls(match)
     if (!isValidUrl) {
      const msg = "not vaild link";
       return await message.sendMessage(msg)
    } else {
      const msg  = "Vaild link √";
      await message.sendMessage(msg)
    }
   }
}