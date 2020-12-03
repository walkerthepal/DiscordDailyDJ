const cron = require('cron');

module.exports = {
	name: 'setCronJob',
	description: 'Purge all users from the dj queue',
	setCronJob: function () {
		var [hour, minute, day] = newTime.split(":");
		scheduledJob = new cron.CronJob(`${minute} ${hour} * * ${day}`, task);
		scheduledJob.start();
		markerTime = newTime;
	},
	name: 'sendPing',
	description: 'called from cron to get user to update the playlist with their mixtape',
	sendPing: function () {
		//pings user in the music channel asking for music
		client.channels.cache.get(musicChannelID).send(`${userScheduleList[0]} please post your mixtape for the week.`);
		//pushes user to back of array
		userScheduleList.push(userScheduleList[0]);
		//removes them of front of array
		userScheduleList.shift();
		//if there is a new time then it resets the cronjob the next day
		if (newTime !== markerTime) {
			scheduledJob.stop();
			setCronJob();
		}
	},
	name: 'sendReminder',
	description: 'called from cron to remind users to listem to the mixtape',
	sendReminder: function () {
		if (day = 6 && hour == markerTime.hour && minute == markerTime.minute)
			message.channel.send('Please post your thoughts on the mixtape of the week.');
	},
	name: 'archiveMixTape',
	description: 'called from cron to automatically erase existing mixtape and add songs to mixtape',
	archiveMixTape: function () {
		//call spotifyHelper/archive
	},
}
