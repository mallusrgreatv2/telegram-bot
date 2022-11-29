const TelegramBot = require('node-telegram-bot-api');
const cfg = require('../cfg.json');
// It's sole purpose is to add the `commands` map into the client so that i can use autocomplete
class Client extends TelegramBot {
    constructor() {
        super(cfg.token, { polling: true });
    }
    commands = new Map();
}
module.exports = Client;