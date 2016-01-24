var express  = require('express');
var app      = express();	
var path = require('path');
var numeral = require('numeral');
var moment = require('moment');
var favicon = require('static-favicon');
var logger = require('morgan');
var http = require('http');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ws = require('ws').Server;		
var routes = require('./public/app/index.js');
var loggerWinston = require('./public/app/logger.js');
var block = require('./public/app/api/blocks_api');
var tx = require('./public/app/api/transactions_api');
var address = require('./public/app/api/address_api');
var status = require('./public/app/api/status_api');
var charts = require('./public/app/api/charts_api');
var votes = require('./public/app/api/vote_api');
var motions = require('./public/app/api/motions_api');
var peers = require('./public/app/api/peers_api');
var NSRaddresses = require('./public/app/api/nsr_addresses_api');
var NBTaddresses = require('./public/app/api/nbt_addresses_api');
var OplogWatcher = require('mongo-oplog-watcher');

// configuration ===========================================
// view engine setup
app.set('views', path.join(__dirname, './public/app/jade'));
app.set('view engine', 'jade');
app.use(logger('dev')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(__dirname + '/public')); // set the static files location
app.set('port', 800);
app.set('/',routes);
app.get('/');
var server = http.createServer(app).listen(app.get('port'),function() {
    console.log("App listening on port " + app.get('port'));
});
