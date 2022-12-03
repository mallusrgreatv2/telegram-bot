module.exports = {
    name: 'echo',
    run(bot, message, args) {
        // `args` is an Array which contains everything after the command
        if(!args[0]) return bot.sendMessage(message.chat.id, "Put some text after /echo to make me echo something!")
        bot.sendMessage(message.chat.id, args.join(' '));
    }   
}
