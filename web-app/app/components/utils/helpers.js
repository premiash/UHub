// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Helper functions for making API Calls
var helper = {

    registerUser: function (emailaddress, password) {
        axios.post("/register").then(function(response) {
          //TODO
        });
    }
};

// We export the API helper
module.exports = helper;