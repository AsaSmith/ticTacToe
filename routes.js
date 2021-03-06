var express = require('express');
var app = express.Router();

app.use(function(req, res, next) {
  if (req.session.user_id) {
    models.user.findById(req.session.user_id).then(function(user) {
      console.log("user logged in as " + user.username);
      req.currentuser = res.locals.currentuser = user;
      next();
    });
  } else {
    next();
  }
});

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/game', function(req, res) {
  var playerName = req.session.playerName;
  res.render('game', { username: playerName });
});

app.post('/game', function(req, res) {
  req.session.playerName = req.body.username;
  req.session.save(function() {
    res.redirect('/game');
  });
});

var models = require('./models');

app.use('/games', require('./routes/games'));

app.use('/users', require('./routes/users'));
app.use('/login', require('./routes/login'));

// user registration
app.get('/register', function(req, res) {
  res.render('register');
});

app.post('/register', function(req, res) {
  // Does the user exist already?
  models.user.find({ where: { username: req.body.username }})
    .then(function(user) {
        if (user) {
          req.flash('warning', "username already exists");
          req.session.save(function() {
            res.redirect('/register');
          });
        } else {
          models.user.create(req.body)
            .then(function(newuser) {
              req.session.user_id = newuser.id;
              req.session.save(function() {
                res.redirect('/games');
              });
            });
        }
    });
});

module.exports = app;
