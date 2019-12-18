
let dotenv = require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./key.js");
let fs = require ("fs");


var spotify = new Spotify(keys.spotify);

const song = process.argv[2];

spotify.search({ type: 'track', query: song, limit: 1 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
  
  if(data.tracks.items.length === 0){
    spotify.search({ type: 'track', query: "the sign ace" , limit: 1 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        const songObject = data.tracks.items[0];
        const artists =[];
        for (let i=0; i< songObject.artists.length; i++){
            artists.push(songObject.artists[i].name)
        }
        const preview = songObject.preview_url;
        const name = songObject.name;
        const album = songObject.album.name;
        console.log(`artists: ${artists},\n preview: ${preview},\n name: ${name},\n album: ${album}` )
      }) 
  }
  else {
    const songObject = data.tracks.items[0];
    const artists =[];
    for (let i=0; i< songObject.artists.length; i++){
        artists.push(songObject.artists[i].name)
    }
    const preview = songObject.preview_url;
    const name = songObject.name;
    const album = songObject.album.name;
    console.log(`artists: ${artists},\n preview: ${preview},\n name: ${name},\n album: ${album}` )
  }
}); 
let finishedAnswer = process.argv[2];
// function songInfo(){
  fs.appendFile("log.txt", finishedAnswer + ',', 'utf8', function(err){
    if(err){
      return console.log(err);
    }
  });
// }


  
