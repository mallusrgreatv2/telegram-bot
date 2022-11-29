const Glob = require('glob');
const {promisify} = require('util');
const glob = promisify(Glob);
const TelegramBot = require('./CustomClient')
/**
 * 
 * @param {TelegramBot} bot 
 */
module.exports = async(bot) => {
    // Ensure that the handler is called (also called debugging)
    console.log('Handler: Loaded');
    let cmds = await glob('./src/commands/*.js');
    cmds.forEach(value => {
        let cmd = require('../'+value);
        bot.commands.set(cmd.name, cmd);
        console.log(`Command   |   ${cmd.name}   |   Loaded`);
    })
}