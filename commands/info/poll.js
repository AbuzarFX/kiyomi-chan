const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: "poll",
        description: "polling",
        category: "info",
        usage: "[question]",
        noalias: "No Aliases",
        accessableby: "Administrator",
    },
    run: async (bot, message, args) => {
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send("**You Do Not Have Sufficient Permissions! - [MANAGE_GUILD]**");

        if (!args[0])
            return message.channel.send("**Please Enter A Query!**");

        const embed = new MessageEmbed()
            .setColor("#ff0000")
            .setTitle(`Poll 📢`)
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setDescription(args.join(' '))
        var msg = await message.channel.send(embed);

        await msg.react('788102360936218685');
        await msg.react('796376380560113675');

        message.delete({ timeout: 1000 });
    }
}
