const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js")
module.exports = {
  config: {
  name: "pokemon",
  description: "Get any pokemon description",
  category: "fun",
  usage: "pokemon <name>",
  },
  run: (client, message, args) => {


const options = {
  url: `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=${args.join(" ")}`,
  json: true
  
}

message.channel.send("Fetching Information for API...").then(msg => {
  get(options).then(body => {
    
    let embed = new MessageEmbed()
    .setAuthor(body.name, `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.typeIcon}`)
    .setDescription(body.info.description)
    .setThumbnail(`https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.photo}`)
    .setColor("#ff2050")
    .setFooter(`Weakness of pokemon - ${body.info.weakness}`, `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.weaknessIcon}`)
    
    message.channel.send(embed)
    msg.delete()
  })
})



}
}