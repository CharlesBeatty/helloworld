var express = require('express');
var router = express.Router();

var envName = 'ENV: ' + process.env.COPILOT_ENVIRONMENT_NAME;

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('index', { title: envName });
});

module.exports = router;
