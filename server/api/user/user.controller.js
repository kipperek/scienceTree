'use strict';

//var _ = require('lodash');
var User = require('./user.model'),
  passport = require('passport');

//Sprawdz czy user jest zalogowany
exports.isAuthenticated = function(req, res){
  if(req.user) {
    return res.json(200, {auth: true, user: { username: req.user.username }});
  }
  else{
    return res.json(401, {auth:false});
  }
};

exports.signUp =function(req, res) {
  User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
    if (err) {
      return res.json(400, {success: false});
    }

    passport.authenticate('local')(req, res, function () {
      res.json(200, { success: true, user: { username: user.username } });
    });
  });
};

exports.logOut = function(req,res){
  req.logout();
  return res.json(200, { logOut: true });
};

exports.hideCookies = function(req,res){
  res.cookie('cookiePolicy',true);
  return res.json(200, { success: true });
};

exports.checkCookies = function(req,res){
  var policy = req.cookies.cookiePolicy;
  return res.json(200, { success: true, policy: policy });
};
