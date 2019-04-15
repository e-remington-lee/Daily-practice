console.log("Bot Initialized");

var config = require('./config');
var Twit = require('twit');

var T = new Twit(config);

var params = {
    q: 'rainbow since:2016-12-11',
    count: 20
};


T.get('search/tweets', params, getData);

function getData(err, data, response) {
    var tweet = data.statuses;
    var x =1;
    
    for (let i=0; i< tweet.length ; i++) {

    
    console.log(tweet[i].text)
    console.log(x)
    x += 3;
    };
}

