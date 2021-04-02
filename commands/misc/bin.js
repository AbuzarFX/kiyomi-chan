const { create } = require("sourcebin")

module.exports = {
    config: {
        name: "bin",
        category: "misc",
        description: "Upload your code to Sourcebin!"
    },
    run: async (bot, message, args) => {
        const content = args.join(" ");

        if(!content) return message.lineReplyNoMention({ embed: {
            color: "#ff0000",
            description: "Please specify the content!"
        }});

        create([
            {
                name: 'Random Code',
                content,
                language: "javascript",


            }
        ],
        {
            title: 'Title',
            description: 'Description'
        }
        
        ).then((value) => {
            message.channel.send(`Your code has been uploaded: ${value.url}`)
        })
    },
}