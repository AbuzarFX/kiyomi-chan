const Minesweeper = require('discord.js-minesweeper');

module.exports = {
    config: {
    name: "mine",
    description: "Minesweeper",
    },
    run: async (client, message, args) => {
   
const minesweeper = new Minesweeper({
  returnType: 'emoji'
});
var mines = minesweeper.start()
message.channel.send(mines)
    }
}
