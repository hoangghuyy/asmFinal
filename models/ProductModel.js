var mongoose = require('mongoose');
var ProductSchema = mongoose.Schema({
  name: String,
  image: String,
  price: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'categories',
  },
  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'countries',
  },
});

var ProductModel = mongoose.model('products', ProductSchema);
module.exports = ProductModel;
