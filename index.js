var express  = require('express');
var app      = express();
var hooks    = express.Router();

hooks.use(function (req, res, next) {
  console.log(req);
  next();
});


module.exports = app;
