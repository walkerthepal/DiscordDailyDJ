module.exports = {
	name: 'uptime',
	description: 'the number of days the service has been up',
	execute(message, args) {
		const currentDate = new Date();
		console.log(`The current datetime is ${currentDate}`);
		const diffTime = Math.abs(currentDate - startDate);
		const diffSeconds = Math.round(diffTime / 1000);
		const diffMinutes = Math.round(diffTime / (1000 * 60));
		const diffHours = Math.round(diffTime / (1000 * 60 * 60));
		const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
		message.channel.send(`It has been ${diffSeconds} seconds, ${diffMinutes} minutes, ${diffHours} hours, ${diffDays} days since last restart`);
	},
};