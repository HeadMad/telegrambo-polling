import telegrambo from 'telegrambo';
import polling from './index.js';

const bot = telegrambo(process.env.BOT_TOKEN);
bot.polling = polling;

bot.on(event => {
  event.sendMessage({
    text: event.message.text
  });
});

  bot.polling(async (update, stop) => {
    if (update.message.text === 'stop')
      stop();
    else 
      await bot.setUpdate(update)
  });