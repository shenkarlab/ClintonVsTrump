var express=require('express');
var app = express();

var init = require('./controller/initcontroller');
var top10 = require('./controller/top10controller');
var alltopic = require('./controller/topiccontroller');

var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var multipartAction = multipart();



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set('port', port);

app.use('/init', express.static('./public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
app.set('json spaces', 4);
res.set("Content-Type", "application/json");
  next();
});

app.use('/alltopic', express.static('./public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
app.set('json spaces', 4);
res.set("Content-Type", "application/json");
  next();
});


app.get('/init', init.saveData);
app.get('/top10', top10.getData);
app.get('/alltopic', alltopic.getData);

app.listen(port);