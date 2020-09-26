const { User } = require("discord.js");

module.exports = {
	name: 'reorder',
	description: 'Reorder two users in the queue given the two positions of the users.',
	execute(message, args) {
		if (message.guild.ownerID === message.author.id) {
			if (args && args.length === 2) {
				if (args[0] < userScheduleList.length && args[1] < userScheduleList.length) {
					var tempUser = userScheduleList[args[0]];
					userScheduleList[args[0]] = userScheduleList[args[1]];
					userScheduleList[args[1]] = tempUser;
					message.channel.send("Successfully reordered")
				}
				else
					message.channel.send("Out of bounds")
			}
			else
				message.channel.send("Please reorder two people")

		}
		else
			message.channel.send("Nice try bucko, step off that there high horse")
	},
};