const { MessageEmbed } = require('discord.js');
const spanks = require('../../JSON/spank.json');

module.exports = {
    config: {
        name: "spank",
        category: "misc",
        noalias: [''],
        description: "Spank `em hard",
        usage: "[username | nickname | mention | ID]",
        accesableby: "everyone",
    },

        run: async (client, message, args) => {

            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase());
    
            let spank = spanks.spank[Math.floor((Math.random() * spanks.spank.length))];

            if(!args[0]) {
                const sembed = new MessageEmbed()
                    .setColor("#FF0000")
                    .setDescription(". . . You can't spank yourself, chief.")
                    .setTimestamp()
                message.channel.send(sembed);
            }
                else if(args[0]) {
                const sembed = new MessageEmbed()
                    .setDescription(`🥵 ${message.author} spanked ${message.mentions.users.first() || message.mentions.members.first()}`)
                    .setImage(`${spank}`)
                    .setColor("#FF0000")
                message.channel.send(sembed);
            }
        }
    }
