const fetch = require("node-fetch");

module.exports = {
    config: {
        name: 'chat',
        description: "Talk to Kiyomi like she's your friend :'))",
        category: 'fun',
        usage: '(prefix)chat <text>'
    },
    run: async (bot, message, args) => {
        let mesg = args.join(" ");
        if(!mesg) return message.channel.send("**Please say something.**");
        fetch(`http://api.brainshop.ai/get?bid=154059&key=JF1PMKGyugvLC7Lf&uid=1&msg=${encodeURIComponent(mesg)}`)
        .then(res => res.json())
        .then(data => {
           message.channel.send(data.cnt);
        });
    }
}