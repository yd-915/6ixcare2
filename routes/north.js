var express = require('express');
var router = express.Router();
var up = require('../data/northend');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(up);
});

module.exports = router;
