module.exports = {
	name: 'schedule',
	description: 'Prints out the queue of users.',
	execute(message, args) {
		for (const user of userScheduleList){
			message.channel.send(user.userId )
		}
	},
};