console.log("Bot Initialized");

var config = require('./config');
var Twit = require('twit');

var tweet = new Twit(config);

var params = {
    q: 'rainbow since:2017-12-11',
    count: 10
};

console.log(tweet.type)
tweet.get('search/tweets', params, getData);

function getData(err, data, response) {
    console.log(data);
}

