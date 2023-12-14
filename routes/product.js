var express = require('express');
const ProductModel = require('../models/ProductModel');
const CategoryModel = require('../models/CategoryModel');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  var products = await ProductModel.find({}).populate('category');
  res.render('admin/product/index', { products, layout: 'layout_admin' });
});

router.get('/add', async (req, res) => {
  var categories = await CategoryModel.find({});
  res.render('admin/product/add', { categories, layout: 'layout_admin' });
});

router.post('/add', async (req, res) => {
  var products = req.body;
  await ProductModel.create(products);
  res.redirect('/product');
});

router.get('/edit/:id', async (req, res) => {
  var id = req.params.id;
  var products = await ProductModel.findById(id);
  var categories = await CategoryModel.find({});

  res.render('admin/product/edit', {
    products,
    categories,
    layout: 'layout_admin',
  });
});

router.post('/edit/:id', async (req, res) => {
  var id = req.params.id;
  var products = req.body;
  try {
    //sql: update mobiles SER A= B WHERE id = "id";
    await ProductModel.findByIdAndUpdate(id, products);
    condole.log('update o ke');
  } catch (err) {
    console.log('ko the update' + err);
  }
  res.redirect('/product');
});

router.get('/delete/:id', async (req, res) => {
  var id = req.params.id;
  //cách 1
  try {
    await ProductModel.findByIdAndRemove(id);
    console.log('Delete product success');
  } catch (err) {
    console.log('Delete product fail. Error: ' + err);
  }
  //cách 2
  // var brand = await BrandModel.findById(id);
  // await BranfModel.remove(brand);
  res.redirect('/product');
});

router.get('/deleteall', async (req, res) => {
  await ProductModel.deleteMany();
  console.log('Delete all product success');
  res.redirect('/product');
});

router.post('/search', async (req, res) => {
  var keyword = req.body.keyword;
  var products = await ProductModel.find({ model: new RegExp(keyword, 'i') });
  res.render('admin/product/index', { products, layout: 'layout_admin' });
});

router.get('/sort/desc', async (req, res) => {
  var products = await ProductModel.find().sort({ model: -1 });
  res.render('admin/product/index', { products, layout: 'layout_admin' });
});

module.exports = router;
