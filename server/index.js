"use strict";

// Basic express setup:

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const MONGODB_URI = "mongodb://localhost:27017/tweeter";
const {MongoClient} = require("mongodb");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const mongoClient = MongoClient.connect(MONGODB_URI, (err, db) => {
// The in-memory database of tweets. It's a basic object with an array in it.
const DataHelpers = require("./lib/data-helpers.js")(db);
const tweetsRoutes = require("./routes/tweets")(DataHelpers);
app.use("/tweets", tweetsRoutes);

});
app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
