var express = require('express');
var router = express.Router();
var right = require('../data/eastend');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(right);
});

module.exports = router;
