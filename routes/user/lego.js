var express = require('express');
var ProdctModel = require('../../models/ProductModel');
var router = express.Router();

router.get('/lego/:category', async (req, res) => {
  var category = req.params.category;
  var products = await ProdctModel.find({ category });
  res.render('user/lego/index', { category, products });
});

module.exports = router;
