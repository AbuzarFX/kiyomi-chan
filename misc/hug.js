const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    config: {
    name: "hug",
    category: "misc",
    description: "Hugs the mentioned user.",
    },
    run: async (client, message, args) => {
        const url = 'https://some-random-api.ml/animu/hug';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured!`)
        }

        const embed = new MessageEmbed()
            .setDescription(` 🤗 ${message.author} hugs ${message.mentions.users.first() || message.mentions.members.first()}`)
            .setImage(data.link)
            .setColor("#FF0000")

        await message.channel.send(embed)
    }
}