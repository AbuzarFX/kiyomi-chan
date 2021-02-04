const { MessageEmbed } = require("discord.js");  
const { Random } = require("something-random-on-discord")
const random = new Random();
 
module.exports = {
    config: {
  name: "cry",
   category: "misc",
  
  description: "The mentioned user makes you cry.",
    },
run: async (client, message, args) => {
  
    let data = await random.getAnimeImgURL("cry")
    const embed = new MessageEmbed()
    .setDescription(`${args[0]} made ${message.author} cry 😭`)
    .setColor("#FF0000")
    .setImage(data)
    .setTimestamp()
    message.channel.send(embed)
  
}
}
