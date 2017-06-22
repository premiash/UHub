var router = require("./../../routes")
// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Helper functions for making API Calls
var helper = {
    registerUser: function (emailaddress, password, context, callback) {
        
        axios.post("/register", { emailaddress: emailaddress, password: password })
            .then(function(response) {
                console.log(response.data)
                if(response.data.status == "success")
                    callback("success", context)
        })
    },

    consumerLogin: function(emailaddress, password, context, callback) {
        axios.post("/consumer-login", { emailaddress: emailaddress, password: password })
            .then(function(response) {
                console.log(response.data)
                if(response.data.status == "success")
                    callback("success", context)
        })
    }
};
// We export the API helper
module.exports = helper;