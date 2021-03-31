const { MessageEmbed } = require("discord.js")

const { afk } = require("../../Collection")

module.exports = {
    config: {
        name: "afk",
        description: "Used to set AFK status.",
        category: "info",
    },
    run: async (bot, message, args) => {

        const reason = args.join(" ") || 'No reason specified.';

        afk.set(message.author.id, [Date.now(), reason])

        message.lineReplyNoMention({ embed: {
            color: "#ff0000",
            description: `Your AFK status has been set to: \`${reason}\``
        }})

    }
}
