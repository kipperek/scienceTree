'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');


var UserSchema = new Schema({
  name: String,
  surname: String,
  photo: String,
  dateOfBirth: Date,
  username: String,
  password: String,
  email: String,
  preferences: Object
});


UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
