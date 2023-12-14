var express = require('express');
var router = express.Router();
var ProductModel = require('../models/ProductModel');
var CategoryModel = require('../models/CategoryModel');
// var CategoryModel = require('../models/CategoryModel');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('admin/dashboard', { layout: 'layout_admin' });
});

//category
// router.get('/category', async (req, res) => {
//   var categories = await CategoryModel.find({});
//   res.render('admin/category/index', { categories, layout: 'layout_admin' });
// });

// router.get('/category/edit/:id', async (req, res) => {
//   var id = req.params.id;
//   var categories = await CategoryModel.findById(id);
//   res.render('admin/category/edit', { categories, layout: 'layout_admin' });
// });

// router.post('/category/edit/:id', async (req, res) => {
//   var id = req.params.id;
//   var categories = req.body;
//   try {
//     await CategoryModel.findByIdAndUpdate(id, categories);
//     console.log('update succeed !');
//   } catch (err) {
//     console.log('update failed. Error: ' + err);
//   }
//   res.redirect('/category');
// });

// router.get('/product', async (req, res) => {
//   var products = await ProductModel.find({});
//   res.render('admin/product/index', { products, layout: 'layout_admin' });
// });

module.exports = router;
