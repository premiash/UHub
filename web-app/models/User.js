var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  emailaddress: {
    type: String
  },
  password: {
    type: String
  }, 
  status: {
    type: String
  }
});

var User = mongoose.model("User", UserSchema);
module.exports = User;
