var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

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

UserSchema.plugin(passportLocalMongoose);

var User = mongoose.model("User", UserSchema);
module.exports = User;
