const { MessageEmbed } = require('discord.js');
module.exports = {
    config: {
    name: "bonk",
    description: "Bonks the mentioned user.",
    },
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
        .setDescription(`${message.author} bonked ${args[0]}`)
        .setImage(`https://cdn.discordapp.com/emojis/790563957248360458.gif?v=1`)
        .setColor("#ff0000")

        message.channel.send(embed)
    }
}