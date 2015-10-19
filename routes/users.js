// routes/users.js
var express = require('express');
var router = express.Router();

var user = require('../models').user;

router.get('/usernameExists', function(req, res) {
  user.findOne({ where: { username: req.query.username }})
    .then(function(user) {
      if (user) {
        res.json(true);
      } else {
        res.json(false);
      }
    });
});

module.exports = router;
