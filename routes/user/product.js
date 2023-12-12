var express = require('express');
var ProdctModel = require('../../models/ProductModel');
var router = express.Router();

router.get('/', async (req, res) => {
  var products = await ProdctModel.find({});
  res.render('user/product/index', { products });
});

module.exports = router;
