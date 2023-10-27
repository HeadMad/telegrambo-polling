import {nodeBotAsync} from 'telegrambo';
import polling from './index.js';

const bot = nodeBotAsync(process.env.BOT_TOKEN);
bot.polling = polling(bot);

bot.on('message', ctx => {
  ctx.sendMessage({
    text: ctx.update.message.text
  });
});

bot.polling();