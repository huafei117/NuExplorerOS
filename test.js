var express  = require('express');
var app      = express();
var path = require('path');
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
