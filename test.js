import telegrambo from 'telegrambo';
import polling from './index.js';

const bot = telegrambo(process.env.BOT_TOKEN);
bot.polling = polling;

bot.on('message', ctx => {
  ctx.sendMessage({
    text: ctx.update.message.text
  });
});

  bot.polling();