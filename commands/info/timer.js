const ms = require("ms");
const { MessageEmbed } = require("discord.js");
const { Timers } = require("../../variable");
module.exports = {
    config: {
  name: "timer",
  description: "Set a timer for your self!",
  usage: "<#d/h/m>",
  category: "fun",
    },
  run: async (bot, message, args) => {
    if (!args[0]) {
      return message.channel.send(
        `You did not specify the amount of time you wish to set a timer for!`
      );
    }
    if (!args[0].endsWith("d")) {
      if (!args[0].endsWith("h")) {
        if (!args[0].endsWith("m")) {
          return message.channel.send(
            `You did not use the proper format for the the time!`
          );
        }
      }
    }
    if (isNaN(args[0][0])) {
      return message.channel.send(`That is not a number!`);
    }
    Timers.set(message.author.id + " G " + message.guild.name, {
      Guild: message.guild.name,
      Author: {
        Tag: message.author.tag,
        ID: message.author.id,
      },
      Time: ms(args[0]),
    });
    message.channel.send(
      `${message.author} you have set a timer for ${args[0]} (${ms(
        args[0]
      )}ms)`
    );
    setTimeout(() => {
      let Embed = new MessageEmbed()
        .setTitle(`Timer finished in guild ${message.guild.name}..`)
        .setDescription(
          `Your timer for ${args[0]} (${ms(args[0])}ms) has finished!`
        )
        .setColor("#FF0000");
      message.author.send(Embed);
      Timers.delete(message.author.id + " G " + message.guild.name);
    }, ms(args[0]));
  },
};
