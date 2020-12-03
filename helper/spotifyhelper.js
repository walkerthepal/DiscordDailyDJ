const Spotify = require('spotify-web-api-node')
module.exports = {
	name: 'archive',
	description: 'archive songs from weekly mixtape into Archive playist.',
	archive: function() {
		spotifyApi.getPlaylist(spotifyWeeklyPlaylistID)
		.then(function(data) {
		  console.log('Some information about this playlist', data.body);
		}, function(err) {
		  console.log('Something went wrong!', err);
		})
	  
	},
	name: 'wipe',
	description: 'wipes current weekly mixtape',
	wipe: function() {

	},

}