const { MessageEmbed } = require('discord.js');
const kisses = require('../../JSON/kiss.json');

module.exports = {
    config: {
        name: "kiss",
        category: "misc",
        noalias: [''],
        description: "Kiss someone.",
        usage: "[username | nickname | mention | ID]",
        accesableby: "everyone",
    },

        run: async (client, message, args) => {

            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase());
    
            let kiss = kisses.kiss[Math.floor((Math.random() * kisses.kiss.length))];

            if(!args[0]) {
                const sembed = new MessageEmbed()
                    .setColor("#FF0000")
                    .setDescription(". . . You can't kiss yourself, chief.")
                    .setTimestamp()
                message.channel.send(sembed);
            }
                else if(args[0]) {
                const sembed = new MessageEmbed()
                    .setDescription(` 😳 ${message.author} kissed ${message.mentions.users.first() || message.mentions.members.first()}`)
                    .setImage(`${kiss}`)
                    .setColor("#FF0000")
                message.channel.send(sembed);
            }
        }
    }