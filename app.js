var express = require('express')
  , engine = require('ejs-locals')
  , bodyParser = require('body-parser')
  , expressValidator = require('express-validator')
  , flash = require('express-flash')
  , http = require('http')
  , path = require('path')
  , _ = require('lodash');


var app = express();

app.engine('ejs', engine);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('view options', {
  layout: false
});
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressValidator());

app.use(flash());

app.use(express.static('public'));

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
