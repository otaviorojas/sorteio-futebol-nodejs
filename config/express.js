var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var async = require('async');
var moment = require('moment');


module.exports = function(){
      var app = express();

      app.set("view engine","ejs");
      app.set('views', './views');
      app.use(express.static('public'));
      app.use(bodyParser.urlencoded({extended: true}));//false
      app.use(bodyParser.json());
      app.async = async;
      app.moment = moment;

          load('models')
          .then('controllers')
          .then('routes')
          .into(app);
      return app;
};
