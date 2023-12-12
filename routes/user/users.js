var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'pillloMart' });
});

// router.get('/login', function (req, res) {
//   res.render('user/login');
// });

// router.get('/register', function (req, res) {
//   res.render('user/register');
// });

module.exports = router;
