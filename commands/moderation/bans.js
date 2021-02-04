const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
    name: "bans",
    category: "moderation",
    },
    run: async (client, message, args) => {

        message.guild.fetchBans().then(bans => {
            message.channel.send({ embed : {
                description: `\`${bans.size}\` total banned users in this guild.`,
                color: '#ff0000'
            }})
        })

    }
}