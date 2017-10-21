"use strict";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
    return {

        // Saves a tweet to `db`
        saveTweet: function(newTweet, callback) {
            db.collection("tweets").insertOne(newTweet, function(err, tweet) {
                callback(null, tweet);
            });
        },

        getTweets: function(callback) {
            db.collection("tweets").find().sort({ "created_at": -1 }).toArray(callback);
        }
    }
}