var express = require('express');
var router = express.Router();

var Users = require('../models').Users;

router.get('/usernameExists', function(req, res) {
  // We don't need to actually examine the existing user for a given username
  // We only need to know if it exists or not
  Users.findOne({ where: { user_name: req.query.user_name }}).then(function(user) {
    if (user) {
      res.json(true);
    } else {
      res.json(false);
    }
  })
});

module.exports = router;
