var mongoose = require('mongoose');
var ProductSchema = mongoose.Schema({
  name: String,
  image: String,
  price: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'categories', //'brand': collection name
  },
});

var ProductModel = mongoose.model('products', ProductSchema);
module.exports = ProductModel;
