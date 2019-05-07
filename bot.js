'use strict';

const telebot = require('telebot'),
    bot = new telebot(process.env.BOT_TOKEN);

bot.start();

bot.on('/ping', message => {
    
    const pingTime = Date.now();
    
    message.reply.text("Pong!")
        .then(({ result }) => bot.editText(
            { chatId: message.chat.id, messageId: result.message_id },
            "Pong!\n" + ((Date.now() - pingTime) / 1000) + " s")
        );
    
});
