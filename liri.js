
let dotenv = require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./key.js");
let 

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
}) 

const axios = require('axios');

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });  

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
      
// Artist(s)


// The song's name


// A preview link of the song from Spotify


// The album that the song is from



// .then(function(inquirerResponse, err) {
