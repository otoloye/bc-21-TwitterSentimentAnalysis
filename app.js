// An asynchronous client library for the Twitter REST and Streaming API's.
var Twitter = require('twitter');


/**
  * This redirects to the .env file to get the values for the api property fields.
  */

var client = new twitter ({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret,
});
 


 /**
  * REST API : we simply need to pass the endpoint and parameters to the methods
  */
client.get('statuses/user_timeline', {	screen_name: 'Otoloye',    count: 2
}, function(error, tweets, response) {
   console.log(tweets);
});