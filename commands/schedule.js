module.exports = {
	name: 'schedule',
	description: 'Prints out the queue of users.',
	execute(message, args) {
		const currentDate = new Date();
		for (index = 0; index < userScheduleList.length; index++) {
			var userDate = new Date(+currentDate);
			userDate.setDate(currentDate.getDate() + index);
			const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
			message.channel.send(userScheduleList[index].username + `s turn on ${userDate.toLocaleDateString("en", options)}`);
		}
	},
};