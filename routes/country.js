var express = require('express');
var router = express.Router();
var CategoryModel = require('../models/CategoryModel');
const CountryModel = require('../models/CountryModel');

/* GET home page. */
router.get('/', async (req, res) => {
  var countries = await CountryModel.find({});
  res.render('admin/country/index', { countries, layout: 'layout_admin' });
});

router.get('/add', (req, res) => {
  res.render('admin/country/add', { layout: 'layout_admin' });
});

router.post('/add', async (req, res) => {
  var countries = req.body;
  await CountryModel.create(countries);
  res.redirect('/country');
});

module.exports = router;
