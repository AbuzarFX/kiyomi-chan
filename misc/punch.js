const { MessageEmbed } = require('discord.js');
const punches = require('../../JSON/punch.json');

module.exports = {
    config: {
        name: "punch",
        category: "misc",
        noalias: [''],
        description: "Punch `em hard",
        usage: "[username | nickname | mention | ID]",
        accesableby: "everyone",
    },

        run: async (client, message, args) => {

            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase());
    
            let punch = punches.punch[Math.floor((Math.random() * punches.punch.length))];

            if(!args[0]) {
                const sembed = new MessageEmbed()
                    .setColor("#FF0000")
                    .setDescription(". . . You can't punch yourself, chief.")
                    .setTimestamp()
                message.channel.send(sembed);
            }
                else if(args[0]) {
                const sembed = new MessageEmbed()
                    .setDescription(`👊 ${message.author} punched ${message.mentions.users.first() || message.mentions.members.first()}`)
                    .setImage(`${punch}`)
                    .setColor("#FF0000")
                message.channel.send(sembed);
            }
        }
    }
