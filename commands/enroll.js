const { UserFlags } = require("discord.js");

module.exports = {
	name: 'enroll',
	description: 'enroll the user who uses into the queue',
	execute(message, args) {
		message.channel.send(`Hello <@${message.author.id}>`);
		console.log(message.author)
		userScheduleList.push(message.author);
	},
};