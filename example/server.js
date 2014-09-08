
var express = require('express');
var app = express();
var morgan = require('../');

var logger = require('mag')('app');

app.use(morgan('combined'));
app.get('/', function(req, res) {
  res.send('Hello World');
});

app.listen(3000, function() {
  logger.info('Express listening on port 3000');
});
