# Twitter Sentiment Analysis

### INTRODUCTION

Sentiment is the attitude, opinion or feeling toward something, such as a person, organization, product or location.


### DEPENDENCIES

```sh
$ npm install twitter
$ npm install -d
$ node app
```

### WORKTHROUGH
This project is divided into two major tasks:
  - Task A: Consuming twitter outputs (from twitter API, in JSON format)
  - Task B: Performing a sentiment Analysis of the tweets(goton from Task A)
  

**Task A** - As a part of this task, we can do the following:

 - Access Twitter live stream and captured a particular user tweets using Twitter REST API.
 - Calculate percentage 
 - Perform a word frequency heirachy 
 - Search for how many times a word was used


### 1. Getting Twitter Data/Consuming the API
Before you can make use of the twitter API, you need to register/login to you twitter account. Go to Twitter Dev<apps.twitter.com> and log in with your twitter credentials. 
Then register your application Fill out the form and agree to the terms. Put in a dummy website if you don't have one you want to use.
On the next page, click the "API Keys" tab along the top, then scroll all the way down until you see the section "Your Access Token"
Click the button "Create My Access Token", Copy four values into .env file, All four should now be visible on the API Keys page.
You will see code like the below:


```sh
consumer_key:"Enter consumer_key"
consumer_secret:"Enter consumer_secret"
access_token_key:"Enter your access token key here"
access_token_secret:"Enter your access token secret here"
```
 
**NB: Since it's kept in the .env file you dont need to put it in a string format**
```sh
consumer_key=Enter consumer_key
consumer_secret=Enter consumer_secret
access_token_key=Enter your access token key here
access_token_secret=Enter your access token secret here
```
### 2.1 Returns tweets and Calculate percentage

In the app.js file you will also put the value of 

After you get the value of your necessary api keys you can call the REST api client to get the all tweet of a particular user

We get the text of the tweet by calling the data.text

calculation and Show percentage progress as the Twitter API is fetching the tweets. is done based a mathematical logic of 
	perc / data.length * 100

where is perc is a variable that increments through each tweet that is retrieved
data is a param in the callback function of the rest api client method
.length is an inbuilt method in js.
	

		 
### 2.2	Perform a word frequency analysis
To list the words with their frequency starting from the highest to the lowest. Excluding stop-words.

We passed values of the tweet in a dictionary - so we would we can identify the words and their individual frequencies - 

NB: The stop words must be filtered using a simple if statement.(just considered 4 including spaces and double spaces)

### 2.3 Sorting the values from the dictionary 
The dictionary as the values of the words in an unordered format. Recalling the specs of the project it say we should get the words frequency from highest to lowest.

we set an empty array called valueSroted 

We then create a loop to pass through all the keys and values in the dictionary so they can be sorted and finally pushed into the empty array for each word instance


### 2.4 Single word frequency 
This is will calculate the frquency of a particular word 

**Task B**

We would be using the alchemy api to get our sentiment analysis.
AlchemyAPI's sentiment analysis API provides easy to use mechanisms to identify the positive or negative sentiment within any document or webpage.
Alchemy have made our jobs easier, all we is to do is to get an api key (register/login to the site<alchemy site> to get one) Thereafter the scripts parses through twitter outputs (from twitter API, in JSON format) and matches them with sentiment dictionary. Then gives each tweet a sentiment scores/results.

To get the params and properties for set for your sentiment analysis check here http://www.ibm.com/watson/developercloud/alchemy-language/api/v1/#sentiment

NB: Available in XML and JSON(default) only

Credits

These instructions were provided as a part of a project for the Andela bootcamp class 21.