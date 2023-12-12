var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'pillloMart' });
});

router.get('/product', function (req, res) {
  res.render('user/product/index');
});

module.exports = router;
