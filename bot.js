'use strict';

const telebot = require('telebot'),
    bot = new telebot('384742340:AAETgAQr48DrdczySb6gOCI0dmwHQeuKaM8');

bot.start();

bot.on('/ping', message => {
    message.reply.text("Pong!");
});
'use strict';

const telebot = require('telebot'),
    bot = new telebot('123456789:AABcE56qJQ6GmV5Ni3fogvjX3vSfdabdabc');

bot.start();

bot.on('/ping', message => {
    
    const pingTime = Date.now();
    
    message.reply.text("Pong!")
        .then(({ result }) => bot.editText(
            { chatId: message.chat.id, messageId: result.message_id },
            "Pong!\n" + ((Date.now() - pingTime) / 1000) + " s")
        );
    
});'use strict';

const telebot = require('telebot'),
    bot = new telebot('384742340:AAETgAQr48DrdczySb6gOCI0dmwHQeuKaM8');

bot.start();

bot.on('/ping', message => {
    
    const pingTime = Date.now();
    
    message.reply.text("Pong!")
        .then(({ result }) => bot.editText(
            { chatId: message.chat.id, messageId: result.message_id },
            "Pong!\n" + ((Date.now() - pingTime) / 1000) + " s")
        );
    
});
