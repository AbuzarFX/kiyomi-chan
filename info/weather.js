const weather = require('weather-js');
const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    config: {
    name: "weather",
    category: "extra",
    description: "Gets you the weather of a particular city."
    },
    run: async (bot, message, args) => {

    weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
        // 'C' can be changed to 'F' for farneheit results
        if(error) return message.channel.send(error);
        if(!args[0]) return message.channel.send('Please specify a location')

        if(result === undefined || result.length === 0) return message.channel.send('**Invalid** location');

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new MessageEmbed()
        .setDescription(`☁ **${current.skytext}**`)
        .setAuthor(`Weather -- ${current.observationpoint}`, `https://i.imgur.com/CpbNTYM.gif`)
        .setColor("RANDOM")
        .addField('⏳ Timezone', `UTC${location.timezone}`, true)
        .addField('🌡  Degree Type', 'Celcius', true)
        .addField('🌡  Temperature', `${current.temperature}°`, true)
        .addField('🍃  Wind Speed', current.winddisplay, true)
        .addField('🌅  Feels like', `${current.feelslike}°`, true)
        .addField('🌧  Humidity', `${current.humidity}%`, true)


        message.channel.send(weatherinfo)
        })        
    }
}