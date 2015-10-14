var express = require('express');
var router = express.Router();

var Users = require('../models').Users;

router.get('/usernameExists', function(req, res) {
  Users.findOne({ where: { username: req.query.user_name }}).then(function(user) {
    if (user) {
      res.json(true);
    } else {
      res.json(false);
    }
  })
});

module.exports = router;
