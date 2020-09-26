module.exports = {
	name: 'timeset',
	description: 'sets the time that users will be pinged asking for their music choice ',
	execute(message, args) {
		if (message.guild.ownerID === message.author.id) {
			if (args && args.length === 1) {
				var tempTime = args[0].split(":");
				if (tempTime.length === 2 && tempTime[0].length == 2 && tempTime[1].length == 2 && Number.isInteger(parseInt(tempTime[0])) && Number.isInteger(parseInt(tempTime[1]))) {
					time = args[0];
					message.send.channel(`Time succesfully set to ${time}`)
				}
				else
					message.send.channel("Incorrect form please send in xx:xx form")
			}
			else
				message.channel.send("Please input single miltary time")
		}
		else
			message.channel.send("Nice try bucko, step off that there high horse")
	},
};