var express = require('express');
var app = express();
var models = require('./models');


app.use('/bower_components',
  express.static(__dirname + '/bower_components'));
app.use('/public', express.static(__dirname + '/public'))

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'jade');

app.get('/', function(req, res) {
  //res.send('Hello world!');
  res.render('index');
});

app.get('/game', function(req, res) {
  res.render('game', req.query);
});

app.get('/games', function(req, res) {
    models.Board.findAll().then(function(boards) {
        res.send(JSON.stringify(boards));
    });
});

app.get('/games/:game_id', function(req, res) {
    models.Board.findById(req.params.game_id).then(function(board) {
        res.send(JSON.stringify(board));
    });
});
app.post('/game', function(req, res) {
    res.render('game', req.body);
});

app.post('/games', function(req, res) {
    models.Board.create({ board: req.body.board })
        .then(function(board) {
            res.redirect('/games/' + board.id);
        });
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
