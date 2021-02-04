const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    config: {
    name: "yomama",
    category: "misc",
    description: "Sends a random yo momma joke to the mentioned user",
    },
    run: async (client, message, args) => {
        const url = 'https://api.yomomma.info';

        let response, joke;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured!`)
        }

        const embed = new MessageEmbed()
            .setAuthor(`🍼  Yo Mama  🍼`)
            .setTitle(`${message.mentions.users.first().username || message.mentions.members.first()}, ${message.author.username} thinks`)
            .setDescription(data.joke)
            .setColor("#FF0000")
            .setTimestamp()
            

        await message.channel.send(embed)
    }
}