# Telegrambo Polling

Plugin for polling telegram service

## Installation

You can install telegrambo-polling using npm:

`npm install telegrambo-polling` or `npm install headmad/telegrambo-polling`

## Usage
```js
import { nodeBotAsync } from 'telegrambo';
import polling  from 'telegrambo-polling';

const bot = nodeBotAsync(process.env.YOU_BOT_TOKEN);

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

**Parameters:**

- `bot` (BotContext ): The bot instance.

**Returns:**

- `function`: A callback function that get option object:
- `options` (object, optional): Parameters for [getUpdates](https://core.telegram.org/bots/api#getupdates) method.




