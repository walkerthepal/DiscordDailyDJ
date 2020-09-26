const { UserFlags } = require("discord.js");

module.exports = {
	name: 'enroll',
	description: 'enroll the user who uses into the queue',
	execute(message, args) {
		if (userScheduleList.indexOf(message.author) === -1) {
			userScheduleList.push(message.author);
			message.channel.send(`Enrolled <@${message.author.id}>`);
		}
	},
};