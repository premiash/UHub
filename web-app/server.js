// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require('path');
var passport = require('passport');
//var flash = require('connect-flash');

const dbconfig = require('./app/config/db/connection.json');
require('./app/config/models').connect(dbconfig.dbUri);

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

app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
// load passport strategies
const localSignupStrategy = require('./app/config/passport/local-signup');
const localLoginStrategy = require('./app/config/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authorization checker middleware
const authCheckMiddleware = require('./app/config/middleware/auth-check');
app.use('/api', authCheckMiddleware);

// routes
const authRoutes = require('./app/config/routes/auth');
const apiRoutes = require('./app/config/routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

app.use(express.static("./public"));
app.use('/public/assets/fonts', express.static(path.join(__dirname, './public/assets/fonts')));
//Limitless Theme
// app.use('/theme', express.static('./public/theme/material/'))
// app.use('/assets', express.static('./public/theme/material/assets')) 

//Design prototype
// app.use('/prototype', express.static('./public/theme/material/'))
// app.use('/prototype/home', express.static('./public/theme/material/_uhub_index.html'))
// app.use('/prototype/assets', express.static('./public/theme/material/assets'))

// MongoDB Configuration configuration (Change this URL to your own DB)
//mongoose.connect("mongodb://sysuhubrw:abc*123@ds161121.mlab.com:61121/heroku_9ln537cf");
// connect to the database and load models
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

app.post('/api/signup', (req, res, next) => {
  // const validationResult = validateSignupForm(req.body);
  // if (!validationResult.success) {
  //   return res.status(400).json({
  //     success: false,
  //     message: validationResult.message,
  //     errors: validationResult.errors
  //   });
  // }


  return passport.authenticate('local-signup', (err) => {
    if (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        // the 11000 Mongo code is for a duplication email error
        // the 409 HTTP status code is for conflict error
        return res.status(409).json({
          success: false,
          message: 'Check the form for errors.',
          errors: {
            email: 'This email is already taken.'
          }
        });
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'You have successfully signed up! Now you should be able to log in.'
    });
  })(req, res, next);
});

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
