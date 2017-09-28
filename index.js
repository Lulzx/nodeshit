'use strict';

const telebot = require('telebot'),
    bot = new telebot('384742340:AAETgAQr48DrdczySb6gOCI0dmwHQeuKaM8');

bot.start();

bot.on('/ping', message => {
    message.reply.text("Pong!");
});
