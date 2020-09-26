const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const cron = require('cron');
const { time } = require('console');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const musicChannelID='702660803781722234';
//for Testing
//const botChannelID='758890673024925806';

startDate = new Date();
userScheduleList = []
markerTime = "11:11"
newTime = markerTime

//looks at time and sets new cron job to that specifically
function setCronJob(){
	var [hour,minute] = newTime.split(":");
	scheduledJob = new cron.CronJob(`${minute} ${hour} * * *`, sendPing);
	scheduledJob.start();
	markerTime=newTime;
}

function sendPing(){
	//pings user in the music channel asking for music
	client.channels.cache.get(musicChannelID).send(`${userScheduleList[0]} please post your song and topic choice.`);
	//pushes user to back of array
	userScheduleList.push(userScheduleList[0]);
	//removes them of front of array
	userScheduleList.shift();
	//if there is a new time then it resets the cronjob the next day
	if(newTime!==markerTime){
		scheduledJob.stop();
		setCronJob();
	}
}

//allows all these files to be called later
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log(`Started at ${startDate}`);
	setCronJob();
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(token);