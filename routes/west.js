var express = require('express');
var router = express.Router();
var left = require('../data/westend');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(left);
});

module.exports = router;
