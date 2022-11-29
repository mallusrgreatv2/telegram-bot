const TelegramBot = require('./CustomClient');

const bot = new TelegramBot();
require('./handler')(bot);
bot.on('message', async(message) => {
    let cmd = message.text.split(' ')[0].replace('/', '');
    let args = message.text.split(' ').filter(f => !f.startsWith('/'))
    if(bot.commands.get(cmd)) bot.commands.get(cmd).run(bot, message, args)
})