const { MessageEmbed } = require('discord.js');
const { MessageAttachment } = require("discord.js")
module.exports = {
config: {
    name: 'clown',
},
run: async(bot, message, args) => {
    const user =
    message.mentions.members.first() || message.member;
let msg = await message.channel.send('Loading...')
    let att = new MessageAttachment(`https://api.popcatdev.repl.co/clown?image=${user.user.displayAvatarURL({ dynamic: false, format: "png"})}`, `${user.user.username}_clown.png`)

    message.channel.send(att)
    msg.delete()
    }
}
