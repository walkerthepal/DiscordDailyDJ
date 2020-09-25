module.exports = {
	name: 'purge',
	description: 'Purge all users from the dj queue',
	execute(message, args) {
		if(message.guild.ownerId !== message.author.id){
			message.channel.send("Purged schedule")
			userScheduleList=[]
		}
		else
		message.channel.send("Sorry you are not Jesse")
	},
}; 	