var express    = require('express');
var dev        = express.Router();

dev.use(function (req, res, next) {
  console.log(req);
  next();
});

module.exports = dev;
