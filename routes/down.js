var express = require('express');
var router = express.Router();
var old = require('../data/downtown');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(old);
});

module.exports = router;
