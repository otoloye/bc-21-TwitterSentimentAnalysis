# Twitter Sentiment Analysis

### INTRODUCTION
Sentiment Analysis is the process of determining whether a piece of writing is positive, negative or neutral. It’s also known as opinion mining, deriving the opinion or attitude of a speaker. A common use case for this technology is to discover how people feel about a particular topic.

The sentiment analysis API is capable of computing document-level sentiment, sentiment for user-specified targets, entity-level sentiment, quotation-level sentiment, directional-sentiment and keyword-level sentiment. These multiple modes of sentiment analysis provide for a variety of use cases ranging from social media monitoring to trend analysis.

Here we will be using a Twitter sentiment analysis.

### DEPENDENCIES
In your `package.json` you will find the lists of necessary packages
```sh
$ npm init
$ npm install twitter
$ npm install dotenv
$ npm watson-developer-cloud
```
[Here](https://henriquedias.com/blog/how-to-create-a-node-js-command-line-application/) is a link to learn how to make it a CLI app in `node.js`, so it can be accessible anyway in your computer without having to do the `node appname.js` It will automatically start your app

### WORK THROUGH
This project is divided into two major tasks:
  - Task A: Retrieving twitter outputs (from twitter API, in JSON format)
  - Task B: Performing a sentiment Analysis of the tweets (gotten from Task A)
  

**Task A** - As a part of this task, we can do the following:

 - Access Twitter live stream and captured a particular user tweets using Twitter REST API.
 - Calculate and Show percentage progress as the Twitter API is fetching the tweets 
 - Perform a word-frequency analysis and list the words with their frequency starting from the highest to the lowest. Excluding stop-words
 - Search for how many times a particular word was used


### 1. Getting Twitter Data/Consuming the API
Before you can make use of the twitter API, you need to register/login to your twitter account. Go to [Twitter Dev](https://apps.twitter.com/) and log in with your twitter credentials. 
Then register your application fill out the form and agree to the terms. Put in a dummy website if you don't have one you want to use.

On the next page, click the **API Keys** tab along the top, then scroll all the way down until you see the section **Your Access Token**
Click the button **Create My Access Token**, Copy the four values into your `.env` file.

You will see code like the below:
```sh
consumer_key=Enter consumer_key
consumer_secret=Enter consumer_secret
access_token_key=Enter your access token key here
access_token_secret=Enter your access token secret here
```

 
**NB: Since it's kept in the .env file you dont need to put it in a string format**

### 2.1 Returns tweets and Calculate percentage

In the `app.js` file you will also put the value in this format

```sh
consumer_key: process.env.consumer_key,
consumer_secret: process.env.consumer_secret,
access_token_key: process.env.access_token_key,
access_token_secret: process.env.access_token_secret,
```

After you get the value of your necessary api keys you can call the REST api client to get the tweets of a particular user

We get the text of the tweet by calling the `data.text`

calculation and display of the percentage progress as the Twitter API is fetching the tweets. is done based a mathematical logic of 
	`perc / data.length * 100`

- where `perc` is a variable that increments through each tweet that is retrieved.

- `data` is from the `REST api` client method
- `.length` is an inbuilt property in `JavaScript` that returns the length of a string(number of characters).
	

		 
### 2.2	Perform a word frequency analysis
To list the words with their individual frequencies starting from the highest to the lowest. (Excluding stop-words).

We passed values of the tweet in a dictionary - so we can identify the words and their individual frequencies 

**NB: The stop words must be filtered using an if statement (just considered 4 including spaces and double spaces)**

### 2.3 Sorting the values from the dictionary 
The dictionary as the values of the words in an unordered format. Recalling the specs of the project, it says we should get the words frequency from highest to lowest.

We set an empty array called `valueSorted`, thereafter we create a loop to pass through all the keys and values in the dictionary so they can be sorted and finally pushed into the empty array for each word instance.


### 2.4 Single word frequency 
This is will calculate the frquency of a particular word 

**Task B**

We would be using the alchemy api to get our sentiment analysis.
AlchemyAPI's sentiment analysis API provides easy to use mechanisms to identify the positive or negative sentiment within any document or webpage.
Alchemy have made our jobs easier, all we is to do is to get an api key (register/login to the [site](http://www.alchemyapi.com/api/register.html) to get one). Thereafter the scripts parses through twitter outputs (from twitter API, in JSON format) and matches them with sentiment dictionary. Then gives each tweet a sentiment scores/results.

To get the params and properties for set for your sentiment analysis check [here](http://www.ibm.com/watson/developercloud/alchemy-language/api/v1/#sentiment)

**NB: Available in XML and JSON(default) only**


### Credits

These instructions were provided as a part of a project for the Andela bootcamp class 21.