const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
    name: "respect",
    description: "Used to pay respect.",
    category: "fun",
    usage: "<prefix>respect",
    },
    run: async (client, message, args) => {
        const msg = new MessageEmbed()
        .setDescription(`${message.author} has paid their respect.`)
        .setFooter(`Press F to pay respect.`)
        .setColor("#ff0000")

        message.channel.send(msg).then(embedMessage => {
            embedMessage.react('🇫');
        });
        message.delete();
        }
    }


