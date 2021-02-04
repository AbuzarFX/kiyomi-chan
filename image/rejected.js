const Discord = require("discord.js");
const { AME_API } = require('../../config')
const ameClient = require('amethyste-api')
const AmeAPI = new ameClient(AME_API)

module.exports = {
    config: {
        name: "rejected",
        aliases: ['rjc'],
        category: "image",
        description: "Rejects the mentioned user.",
        usage: "[username | nickname | mention | ID] (optional)",
        accessableby: "everyone"
    },

    run: async (bot, message, args) => {

        let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
        let m = await message.channel.send("**Please wait...**");
        let buffer = await AmeAPI.generate("rejected", { url: user.user.displayAvatarURL({ format: "png", size: 512 }), sepia: "false", invert: "false" });
        let attachment = new Discord.MessageAttachment(buffer, "rejected.png");
        m.delete({ timeout: 5000 });
        message.channel.send(attachment);
    }
};