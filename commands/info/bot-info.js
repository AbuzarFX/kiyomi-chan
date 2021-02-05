const { MessageEmbed } = require('discord.js')
const os = require('os')

module.exports = {
    config: {
    name: "bot-info",
    description: "Returns the Bot Information.",
    aliases: ["info"],
    },

     run: async (client, message, args) => {
        {
            const embed = new MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTitle('Bot Stats')
                .setColor('#74a4fb')
                .addFields(
                    {
                        name: '🌐 Servers',
                        value: `Serving ${client.guilds.cache.size} servers.`,
                        inline: true
                    },
                    {
                        name: '📺 Channels',
                        value: `Serving ${client.channels.cache.size} channels.`,
                        inline: true
                    },
                    {
                        name: '👥 Server Users',
                        value: `Serving ${client.users.cache.size}`,
                        inline: true
                    },
                    {
                        name: '⏳ Ping',
                        value: `${Math.round(client.ws.ping)}ms`,
                        inline: true
                    },
                    {
                        name: 'Join Date',
                        value: client.user.createdAt,
                        inline: true
                    },
                    {
                        name: 'Server Info',
                        value: `Cores: ${os.cpus().length}`,
                        inline: true
                    },
                    {
                        name: 'Node Version',
                        value: process.version,
                        inline: true
                    },
                    {
                        name: 'Memory Usage',
                        value: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`,
                        inline: true
                    },
    
                )
                .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true}))
    
            message.channel.send(embed)
        }
    }

}
