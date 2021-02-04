  
const { MessageEmbed } = require("discord.js");
const { Random } = require("something-random-on-discord")
const random = new Random();
 
module.exports = {
    config: {
  name: "slap",
   category: "misc",
  
  description: "Slap the mentioned user, because why the fuck not.",
    },
run: async (client, message, args) => {
  
    let data = await random.getAnimeImgURL("slap")
    const embed = new MessageEmbed()
    .setDescription(`${message.author} slapped ${args[0]}`)
    .setColor("#FF0000")
    .setImage(data)
    .setTimestamp()
    message.channel.send(embed)
  
}
}
