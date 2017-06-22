const express = require('express');
const passport = require('passport');
//const Account = require('../models/account');
const router = express.Router();

router.get('/login1', (req, res) => {
    res.render('/', { });
});

router.post("/register1", function(req, res, next) {
  console.log("/register123")
  res.redirect("/login1")
})



module.exports = router;