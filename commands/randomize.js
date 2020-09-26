module.exports = {
	name: 'randomize',
	description: 'randomize users in the schedule',
	execute(message, args) {
		if (message.guild.ownerID === message.author.id) {
			//code here
			//randomize users in UserScheduleList
			//array of users who have !enrolled
			//https://discord.js.org/#/docs/main/stable/class/User
		}
		else
			message.channel.send("Nice try bucko, step off that there high horse")
	},
};