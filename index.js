var express = require('express')
var app = express()

app.get( function (req, res, next) {
  console.log(req);
  next();
})


module.exports = app;
