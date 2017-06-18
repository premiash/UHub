// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require('path');

//TODO: Require Schemas here 


// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));
app.use('/public/assets/fonts', express.static(path.join(__dirname, './public/assets/fonts')));
//Limitless Theme
app.use('/theme', express.static('./public/theme/material/'))
app.use('/assets', express.static('./public/theme/material/assets')) 

//Design prototype
app.use('/prototype', express.static('./public/theme/material/'))
app.use('/prototype/home', express.static('./public/theme/material/_uhub_index.html'))
app.use('/prototype/assets', express.static('./public/theme/material/assets'))

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect("mongodb://localhost/UHub");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

//Express router
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
