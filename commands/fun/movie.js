const discord = require("discord.js");
const imdb = require("imdb-api");

module.exports = {
    config: {
name: "movie",
  description: "Get the information about series and movie",
  category: "fun",
  usage: "movie <name>",
    },
  run: async (client, message, args, color) => {
    
    if(!args.length) {
      return message.channel.send("Please specify the name of the **movie** or a **series**.")
    }
    
    const imob = new imdb.Client({apiKey: "1eeb0673"}) //You need to paste you imdb api
    
    let movie = await imob.get({'name': args.join(" ")})
    
    let embed = new discord.MessageEmbed()
    .setTitle(movie.title)
    .setColor("#ffd700")
    .setThumbnail(movie.poster)
    .setDescription(movie.plot)
    .setFooter(`Ratings: ${movie.rating}`)
    .addField("Country:", movie.country, true)
    .addField("Languages:", movie.languages, true)
    .addField("Type:", movie.type, true);
    
    
    message.channel.send(embed)
    
    
    
  }

}