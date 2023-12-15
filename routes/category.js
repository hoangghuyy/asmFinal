var express = require('express');
var router = express.Router();
var CategoryModel = require('../models/CategoryModel');

/* GET home page. */
router.get('/', async (req, res) => {
  var categories = await CategoryModel.find({});
  res.render('admin/category/index', { categories, layout: 'layout_admin' });
});

router.get('/add', (req, res) => {
  res.render('admin/category/add', { layout: 'layout_admin' });
});

router.post('/add', async (req, res) => {
  var categories = req.body;
  await CategoryModel.create(categories);
  res.redirect('/category');
});

router.get('/edit/:id', async (req, res) => {
  var id = req.params.id;
  console.log(id);
  var categories = await CategoryModel.findById(id);
  res.render('admin/category/edit', { categories, layout: 'layout_admin' });
});

router.post('/edit/:id', async (req, res) => {
  var id = req.params.id;
  var categories = req.body;
  try {
    await CategoryModel.findByIdAndUpdate(id, categories);
    console.log('update succeed !');
  } catch (err) {
    console.log('update failed. Error: ' + err);
  }
  res.redirect('/category');
});

router.get('/delete/:id', async (req, res) => {
  var id = req.params.id;
  //cách 1
  try {
    await CategoryModel.findByIdAndRemove(id);
    console.log('Delete brand success');
  } catch (err) {
    console.log('Delete brand fail. Error: ' + err);
  }
  //cách 2
  // var brand = await BrandModel.findById(id);
  // await BranfModel.remove(brand);
  res.redirect('/category');
});

router.get('/deleteall', async (req, res) => {
  await CategoryModel.deleteMany();
  console.log('Delete all brand success');
  res.redirect('/category');
});

router.post('/search', async (req, res) => {
  var keyword = req.body.keyword;
  var categories = await CategoryModel.find({
    name: new RegExp(keyword, 'i'),
  });
  res.render('admin/category/index', { categories, layout: 'layout_admin' });
});

router.get('/sort/desc', async (req, res) => {
  var categories = await CategoryModel.find().sort({ name: 1 });
  res.render('admin/category/index', { categories, layout: 'layout_admin' });
});

router.get('/sort/asc', async (req, res) => {
  //sql: SELECT*FROM mobiles ORDER By model
  var categories = await CategoryModel.find().sort({ name: -1 });
  res.render('admin/category/index', { categories, layout: 'layout_admin' });
});

module.exports = router;
