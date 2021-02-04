const { MessageEmbed } = require("discord.js");
module.exports = {
    config: {
  name: "8ball",
  description: "Answers your questions!",
  category: "fun",
    },
  run: async (client, message, args) => {
    let question = args.join(" ");
    if (!question)
      return message.channel.send(`🎱 You did not specify your question!`);
    else {
      let responses = [
        "Yes!",
        "No",
        "Definetly",
        "Absolutely",
        "Not in a million years",
        "Bruh, who are you kidding?",
        "Outlook not so good.",
        "Sure 👀",
        "Who am I to know that?",
        "Maybe.",
        "Certainly not.",
        "I hope so.",
        "Not in your wildest dreams.",
        "There is a good chance.",
        "Quite likely.",
        "I think so.",
        "I hope not.",
        "I hope so.",
        "Never!",
        "Fuhgeddaboudit.",
        "Ahaha! Really?!?",
        "Pfft.",
        "Sorry, bucko.",
        "Hell, yes!",
        "Hell to the no.",
        "The future is bleak.",
        "The future is uncertain.",
        "I would rather not say.",
        "Who cares?",
        "Possibly.",
        "Never, ever, ever.",
        "There is a small chance.",
      ];
      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      let Embed = new MessageEmbed()
        .setTitle(`Answer to your questions.`)
        .setDescription(`🎱 Your question: ${question}\n🎱 My reply: ${response}`)
        .setColor(`#FF0000`);
      message.channel.send(Embed);
    }
  },
};