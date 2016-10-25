//The node.js "util" module provides "utility" functions

module.exports = class { };
var util = require('util'),
    twitter = require('twitter'),
    readline = require('readline');
dotenv = require('dotenv').config();



// An asynchronous client library for the Twitter REST and Streaming API's.
var Twitter = require('twitter');


/**
  * This redirects to the .env file to get the values for the api property fields.
  */

var client = new twitter({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token_key: process.env.access_token_key,
    access_token_secret: process.env.access_token_secret,
});

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Welcome to Andela's Twitter Sentiment Analysis Solution!");
rl.question('Want to get sentiment analysis from your tweets? (yes/no) : ', (answer) => {
    if (answer == "yes") {
        rl.question('Please enter the twitter handle you wish to perform sentiment analysis for :  ', (handle) => {

            rl.question('Number how many tweets do you ish to anayse :  ', (count) => {

            var options = {
                screen_name: handle,
                count: count,
            
            };

                 /**
                * REST API : we simply need to pass the endpoint and parameters to the methods
                */

            client.get('statuses/user_timeline', options, function (err, data, response) {
                if (err) {
                    console.log('Please check your internet and try again');
                    return;
                }
               // console.log(err, data, response.body);
                var WordCount = 0
                var tweet = "";
                for (var i = 0; i < data.length; i++) {
                    var perc = i + 1;
                    console.log('\nTweets ' + '----> ' + data[i].text + '\n');
                    tweet += data[i].text;
                    console.log('percentage ' + perc / data.length * 100 + '%');

                }

                var frequency = {};                
                tweet.toLowerCase().replace(/[^a-z\s]/g, '').split(' ').forEach(function (word) {
                    if (!['and', 'the', ' ',''].includes(word)) {
                        if (frequency[word]) {
                            frequency[word] += 1;
                        } else {
                            frequency[word] = 1;
                        }
                    }
                })                
                var valueSorted = [];
                for (var value in frequency)
                    valueSorted.push([value, frequency[value]])
                    valueSorted.sort(
                        function(a,b) {
                            return b[1]-a[1]
                        })
                        
                        console.log(valueSorted);
                
                rl.question("Search for particular word : ", function (word) {
                    tweet.split(" ").map(function (val) {
                        if (val.indexOf(word) > -1) {
                            WordCount++
                        };

                    });
                    console.log('frequency of ' + word + ' is ' + WordCount);

                    var watson = require('watson-developer-cloud');
                    var alchemy_language = watson.alchemy_language({
                        api_key: process.env.api_key
                    })

                    var parameters = {
                        url: 'www.twitter.com/' + handle + '/'
                    };

                    alchemy_language.sentiment(parameters, function (err, response) {
                        if (err)
                            console.log('error:', err);
                        else
                            console.log(JSON.stringify(response, null, 2));
                    });


                    rl.close();
                });
            });

        });
        });
    }
    else if (answer == "no") {
        console.log("You selected \'no\', bye bye!!!.")

    } else {
        console.log('Please enter Yes or No to use Andela\'s  Sentiment Analysis Solution');
    }

});



