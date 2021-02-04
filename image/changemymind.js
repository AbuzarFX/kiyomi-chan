const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    config: {
        name: "changemymind",
        aliases: ['phc'],
        category: "image",
        description: "Shows PH Comment",
        usage: '[text]',
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {

        let user = await message.mentions.members.first()
        let text = args.join(" ");

        if(user){
            text = args.slice(1).join(" ");
        } else {
            user = message.author;
        }

        if(!text){
            return message.channel.send("**Enter Text!**");
        }

        let m = await message.channel.send("**Please Wait...**");
        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=changemymind&text=${text}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "changemymind.png");
            message.channel.send(attachment);
            m.delete({ timeout: 5000 });
        } catch(e){
            m.edit("Error, Try Again!");
        }
    }
};
