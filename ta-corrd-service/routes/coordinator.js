var express = require('express');
var router = express.Router();

/* GET coordinators. */
router.get('/', function(req, res, next) {
  res.send('This is where you get coordinators.');
});

module.exports = router;
