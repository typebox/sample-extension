var express  = require('express');
var app      = express();

app.use((req, res, next) => {
  console.log(req);
  next();
});


module.exports = app;
