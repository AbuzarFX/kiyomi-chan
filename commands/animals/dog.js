const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
    name: "puppy",
    category: "animals",
    description: "Sends a random fact and an image of a dog.",
    },
    run: async (client, message, args) => {
        const url = "https://some-random-api.ml/img/dog";
        const facts = "https://some-random-api.ml/facts/dog"

        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;

            responses = await axios.get(facts)
            fact = responses.data

        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`Here's a dog 🐶 and a random fact about it!`)
            .setColor(`#f3f3f3`)
            .setDescription(fact.fact)
            .setImage(image.link)

        await message.channel.send(embed)
    }
}