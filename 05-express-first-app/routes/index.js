var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', ring: 'Hello Lex!!! it`s work fine' , condition: false});
});

router.get('/someFile', function(req, res, next) {
  res.render('someFile', { title: 'Express', ring: 'Hello Lex!!! it`s work fine' , condition: true});
});


router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users/details', function(req, res, next) {
  res.send('Details');
});

module.exports = router;
