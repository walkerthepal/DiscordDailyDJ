const fs = require('fs');
const Discord = require('discord.js');

const helper = require('./helper/helper.js')

const spotifyHelper = require('./helper/spotifyhelper.js')

const { prefix, discordToken, spotifyToken, spotifyClientID, spotifyClientSecret, spotifyWeeklyPlaylistID , spotifyArchivePlaylistID
} = require('./config.json');

const { time } = require('console');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

//for Testing
const botChannelID='758890673024925806';
musicChannelID = botChannelID;

startDate = new Date();
//TODO: MAKE USERSCHEDULELIST A FILE AND READ IT SO YOU DON'T HAVE TO DO IT YET
userScheduleList = []
markerTime = "11:11:1"
newTime = markerTime

//allows all these files to be called later
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log(`Started at ${startDate}`);
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

client.login(discordToken);
//TODO:Do you have to run spotify.login ??