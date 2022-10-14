var express = require('express');
var router = express.Router();

var envName = process.env.COPILOT_ENVIRONMENT_NAME;
if (envName === undefined) {
    envName = 'Local';
}
var title = 'ENV: ' + envName;

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('index', { title: title });
});

module.exports = router;
