var express = require('express');
var router = express.Router();
// var ProductModel = require('../models/ProductModel');
// var CategoryModel = require('../models/CategoryModel');
// var CategoryModel = require('../models/CategoryModel');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('admin/dashboard', { layout: 'layout_admin' });
});

module.exports = router;
