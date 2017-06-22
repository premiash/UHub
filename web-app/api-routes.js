//const express = require('express');
const passport = require('passport');
//const Account = require('../models/account');
//const router = express.Router();

// router.get('/login1', (req, res) => {
//     res.render('/', { });
// });

module.exports = function(app) {
  app.post("/register2", function(req, res, next) {
    console.log("/register2")
    //res.redirect("/login1")
  })
}


// router.post("/register2", function(req, res, next) {
//   console.log("/register2")
//   //res.redirect("/login1")
// })


// router.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), (req, res, next) => {
//     req.session.save((err) => {
//         if (err) {
//             return next(err);
//         }
//         res.redirect('/');
//     });
// });

//module.exports = router;