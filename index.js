const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

const prefix = "!";

client.on('ready', () => {
    console.log('Ready to take messages from');
  });

client.on("message", function(message) {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    console.log(`Pong! This message had a latency of ${timeTaken}ms.`)
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }

});

client.login(config.BOT_TOKEN);
