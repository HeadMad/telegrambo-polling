# Telegrambo Polling

Plugin for polling telegram service

## Installation

You can install telegrambo-polling using npm:

`npm install telegrambo-polling`

## Usage
```js
// bot.js
import telegrambo from 'telegrambo';
import polling  from 'telegrambo-polling';

const bot = telegrambo(process.env.YOU_BOT_TOKEN);
const bot.polling = polling;

// Create echo bot
bot.on('message', (event) => {
  event.sendMessage({
    text: event.message.text
  });
});
```

Using with own options:

```
bot.poliing({
  timeout: 60,
  limit: 100,
  offset: 0,
  allowedUpdates: []
});
```

Or with handler:
```js
bot.poliing({}, async (update, stop) => {
  // stop polling if messaege is "/stop"
  if (update.message.text === '/stop')
    stop();

  // Applaing update to bot
  else
    bot.setUpdate(update);
});
```

Also, you can skip options:
```js
bot.poliing(async (update, stop) => {
  // update handler code
});
```


**Returns:**

- `function`: A callback function that get option object:

  - `options` (object, optional): Parameters for [getUpdates](https://core.telegram.org/bots/api#getupdates) method.

  - `options.offset` (number, optional): The initial offset value for the first API request. Default is 0.

  - `options.limit` (number, optional): The maximum number of updates to receive per API request. Default is 100.

  - `options.timeout` (number, optional): The timeout for each API request in seconds. Default is 60 seconds.

  - `options.allowedUpdates` (Array<string>, optional): An array of allowed update types. Default is an empty array.

  - `handler` (function, optional): The handler function to call for each update. Has two arguments:

    -  `update` (object): Object of [update](https://core.telegram.org/bots/api#update).

    - `stop` (function): Function for stop polling.




