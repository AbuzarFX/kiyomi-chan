const { MessageEmbed } = require('discord.js');
const kills = require('../../JSON/kill.json');

module.exports = {
    config: {
        name: "kill",
        category: "misc",
        noalias: [''],
        description: "Kills the mentioned user.",
        usage: "[username | nickname | mention | ID]",
        accesableby: "everyone",
    },

        run: async (client, message, args) => {

            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase());
    
            let kill = kills.kill[Math.floor((Math.random() * kills.kill.length))];

            if(!args[0]) {
                const sembed = new MessageEmbed()
                    .setColor("#FF0000")
                    .setDescription(". . . You can't kill yourself, chief. That's ... Suicide.")
                    .setTimestamp()
                message.channel.send(sembed);
            }
                else if(args[0]) {
                const sembed = new MessageEmbed()
                    .setDescription(`🔪 ${message.author} killed ${message.mentions.users.first() || message.mentions.members.first()}`)
                    .setImage(`${kill}`)
                    .setColor("#FF0000")
                message.channel.send(sembed);
            }
        }
    }
