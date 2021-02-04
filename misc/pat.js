const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    config: {
    name: "pat",
    category: "misc",
    description: "Pats you in the back.",
    },
    run: async (client, message, args) => {
        const url = 'https://some-random-api.ml/animu/pat';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured!`)
        }

        const embed = new MessageEmbed()
            .setDescription(`${message.author} pats ${message.mentions.users.first() || message.mentions.members.first()}`)
            .setImage(data.link)
            .setColor("#FF0000")

        await message.channel.send(embed)
    }
}