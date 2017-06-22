// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require('path');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');

// Create Instance of Express
var app = express();
// require("./api-routes")(app);

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'js');

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
app.use(flash());
app.use(passport.session());

//TODO: Require Schemas here 
var User = require("./models/User.js")
//passport.use(new LocalStrategy(User.authenticate()));
passport.use(new Strategy(
  function(username, password, cb) {
    db.users.findByUsername(username, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); }
      return cb(null, user);
    });
  }));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.static("./public"));
app.use('/public/assets/fonts', express.static(path.join(__dirname, './public/assets/fonts')));
//Limitless Theme
app.use('/theme', express.static('./public/theme/material/'))
app.use('/assets', express.static('./public/theme/material/assets')) 

//Design prototype
app.use('/prototype', express.static('./public/theme/material/'))
app.use('/prototype/home', express.static('./public/theme/material/_uhub_index.html'))
app.use('/prototype/assets', express.static('./public/theme/material/assets'))

//app.use('/', routes);

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect("mongodb://sysuhubrw:abc*123@ds161121.mlab.com:61121/heroku_9ln537cf");
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

app.post('/consumer-login', (req, res, next) => {
    console.log("/consumer-login")
    passport.authenticate("s.shinelin@gmail.com", "shilin123", function(err, res, error){
        console.log(err)
        console.log(res)
        console.log(error)
    })
    // passport.use(new LocalStrategy(
    //   function(username, password, done) {
    //     User.findOne({ username: username }, function (err, user) {
    //       if (err) { return done(err); }
    //       if (!user) { return done(null, false); }
    //       if (!user.verifyPassword(password)) { return done(null, false); }
    //       return done(null, user);
    //     });
    //   }
    // ));  
});

// app.post('/consumer-login', 
//           passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), 
//           (req, res, next) => {
//             console.log("/consumer-login")
//             req.session.save((err) => {
//                 if (err) {
//                     return next(err);
//                 }
//                 res.redirect('/');
//             });
// });

app.post("/register", function(req, res, next) {
  console.log(req.body.emailaddress)
  console.log(req.body.password)

  // Save an empty result object
  var result = {};
  result.emailaddress = req.body.emailaddress;
  result.password = req.body.password;

  User.register(new User({ username : result.emailaddress }), result.password, (err, user) => {
      if (err) {
        console.log("auth err")
        //return res.redirect('/', { error : err.message });
        res.json({ error : err.message })
      }
      res.json({ status : "success" })
      passport.authenticate('local')(req, res, () => {
          req.session.save((err) => {
              if (err) {
                console.log(err)
                  //return next(err);
              }
              console.log("Authenticated")
              //return "success"
              //res.redirect('/');
          });
      });
  });
});



// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
