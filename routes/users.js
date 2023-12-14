var express = require('express');
var router = express.Router();
var ProductModel = require('../models/ProductModel');

// var CategoryModel = require('../models/CategoryModel');

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'pillloMart' });
// });

// router.get('/product', async (req, res) => {
//   var products = await ProductModel.find({});
//   res.render('user/product/index', { products });
// });

// router.get('/login', function (req, res) {
//   res.render('user/login');
// });

// router.get('/register', function (req, res) {
//   res.render('user/register');
// });

// router.get('/category/edit/:id', async (req, res) => {
//   var id = req.params.id;
//   var categories = await CategoryModel.findById(id);
//   res.render('admin/category/edit', { categories, layout: 'layout_admin' });
// });

module.exports = router;
