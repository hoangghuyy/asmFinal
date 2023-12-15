var express = require('express');
var router = express.Router();
var ProductModel = require('../models/ProductModel');

/* GET home page. */
router.get('/', async (req, res, next) => {
  var products = await ProductModel.find({});
  res.render('index', { products, title: 'pillloMart' });
});

router.get('/list_product', async (req, res) => {
  var products = await ProductModel.find({});
  res.render('user/product/index', { products });
});

router.get('/product/detail/:id', async (req, res) => {
  var id = req.params.id;
  // SQL: SELECT * FROM mobiles WHERE _id = "id"
  var products = await ProductModel.findById(id);
  res.render('user/product/detail', { products, layout: 'layout' });
});

module.exports = router;
