var express = require('express');
var _index = require('./lib/index');
var config = require('./config.json');
console.log('starting app..');
var app = express();
console.log('created express server');
if (config.apps) {
  for(var i = 0; i < config.apps.length; i++) {
    var server0 = new _index.ParseServer(config.apps[i]);
    app.use("/" + config.apps[i].name, server0);
  }
}


app.listen(config.port, function(){
  console.log("working! listening on port: " + config.port);
});