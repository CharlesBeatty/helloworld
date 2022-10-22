var express = require('express');
var router = express.Router();

const db  = require('./../db.js');

var envName = process.env.COPILOT_ENVIRONMENT_NAME;
if (envName === undefined) {
    envName = 'local';
}
var title = 'ENV: ' + envName;

router.get('/', function(req, res, next) {
  db.pool.query('SELECT * FROM public.my_table')
    .then(names => {
        res.render('names', { title: title, names: names.rows });
    })
})

module.exports = router;