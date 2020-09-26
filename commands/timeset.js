module.exports = {
	name: 'timeset',
	description: 'sets the time that users will be pinged asking for their music choice ',
	execute(message, args) {
		if (message.guild.ownerID === message.author.id) {
			if (args && args.length === 1) {
				var tempTime = args[0].split(":");
				if (tempTime.length === 2 && tempTime[0].length == 2 && tempTime[1].length == 2 && Number.isInteger(parseInt(tempTime[0])) && Number.isInteger(parseInt(tempTime[1]))) {
					if(tempTime[0]> 0 && tempTime[0]<24 && tempTime[1]>0 && tempTime[1] < 60){
						newTime = args[0];
						message.channel.send(`Time succesfully set to ${newTime}`);
					}
					else
						message.channel.send(`Time must be military range`);
				}
				else
					message.channel.send("Incorrect form please send in xx:xx form");
			}
			else
				message.channel.send("Please input single miltary time");
		}
		else
			message.channel.send("Nice try bucko, step off that there high horse");
	},
};