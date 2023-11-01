# Telegrambo Polling

Plugin for polling telegram service

## Installation

You can install telegrambo-polling using npm:

`npm install telegrambo-polling` or `npm install headmad/telegrambo-polling`

## Usage
```js
import telegrambo from 'telegrambo';
import polling  from 'telegrambo-polling';

const bot = telegrambo(process.env.YOU_BOT_TOKEN);
const bot.polling = polling;

// Create echo bot
bot.on('message', (ctx) => {
  ctx.sendMessage({
    text: ctx.message.text
  });
});


bot.poliing({
  timeout: 60,
  limit: 100,
  offset: 0,
  allowedUpdates: []
});
```

**Returns:**

- `function`: A callback function that get option object:
  - `options` (object, optional): Parameters for [getUpdates](https://core.telegram.org/bots/api#getupdates) method.




