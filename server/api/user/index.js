'use strict';

var express = require('express');
var controller = require('./user.controller');
var passport = require('passport');

var router = express.Router();

router.get('/', controller.isAuthenticated);
router.get('/logout', controller.logOut);

router.post('/login', passport.authenticate('local'), function(req, res) {
  return res.json(200, {
    success: true,
    user: {
      username: req.user.username
    }
  });
});

router.post('/register', controller.signUp);
router.post('/hideCookies', controller.hideCookies);
router.post('/checkCookies', controller.checkCookies);

module.exports = router;
