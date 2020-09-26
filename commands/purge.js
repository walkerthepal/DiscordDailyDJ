module.exports = {
	name: 'purge',
	description: 'Purge all users from the dj queue',
	execute(message, args) {
		if (message.guild.ownerID === message.author.id) {
			message.channel.send("Purged schedule")
			userScheduleList = []
		}
		else
			message.channel.send("Nice try bucko, step off that there high horse")
	},
}; 	