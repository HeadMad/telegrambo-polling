export default polling;

/**
 * Executes a polling loop for receiving updates from a bot.
 *
 * @param {object} bot - The bot object to use for polling.
 * @param {object} options - Optional parameters for the polling loop.
 * @param {number} options.timeout - The timeout for each API request in seconds. Default is 60 seconds.
 * @param {number} options.offset - The initial offset value for the first API request. Default is 0.
 * @param {number} options.limit - The maximum number of updates to receive per API request. Default is 100.
 * @param {Array<string>} options.allowedUpdates - An array of allowed update types. Default is an empty array.
 * @return {Promise<undefined>} A promise that resolves when the polling loop is stopped.
 */
function polling(bot) {
  return async (options = {}) => {
    let {
      timeout = 60,
      offset = 0,
      limit = 100,
      allowedUpdates = []
    } = options;

    while (true) {
      const response = await bot.getUpdates({
        offset,
        timeout,
        limit,
        allowed_updates: allowedUpdates
      });

      if (!response.ok)
        throw new Error(`Polling Error: ${response.error_code} - ${response.description}`);

      if (!response.result.length)
        continue;

      offset = response.result.at(-1).update_id + 1;

      for (let update of response.result)
        bot.setUpdate(update);
    }
  };
}