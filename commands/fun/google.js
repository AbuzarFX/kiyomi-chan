const { MessageEmbed } = require("discord.js");
const { search } = require("node-superfetch");
const request = require("node-superfetch");

module.exports = {
    config: {
    name: "google",
    category: "fun",
    description: "Search the google. (NSFW)",
    },
    run: async (client, message, args) => {
        const embed2 = new MessageEmbed()
        .setColor('#ff0000')
        .setDescription(`This command can only be used in a channel marked as NSFW!`)
        .setImage('https://i.imgur.com/aXzlpRa.jpg')
        if (!message.channel.nsfw) return message.channel.send(embed2)
         let googleKey = 'AIzaSyAZs9ewV4YncfvzFy1rR3Qm8FxtjhEWMsc'; // Google API key.
         let csx = "4b3316d4fddcd3560"; // Search Engine ID.
         let query = args.join(" ");
         let result;

         if (!query) return message.channel.send("Please enter the query.");



         href = await search(query);
     
         if (!href) return message.channel.send("Unknown search.");
     
     
     
         const embed = new MessageEmbed()
     
         .setTitle(href.title)
     
         .setDescription(href.snippet)
     
     
         .setURL(href.link)
     
         .setColor("#FF0000")
     
         .setFooter("Powered by Google", 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png')
     
     
     
         return message.channel.send(embed);
     
     
     
         async function search(query) {
     
             const { body } = await request.get("https://www.googleapis.com/customsearch/v1").query({
     
                 key: googleKey, cx: csx, safe: "off", q: query
     
             });
     
     
     
             if (!body.items) return null;
     
             return body.items[0];
     
         }
        }
    }
