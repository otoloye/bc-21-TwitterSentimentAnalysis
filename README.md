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