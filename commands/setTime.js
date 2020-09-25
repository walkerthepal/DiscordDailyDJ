module.exports = {
	name: 'setTime',
	description: 'sets the time that users will be pinged asking for their music choice ',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};