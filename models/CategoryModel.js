var mongoose = require('mongoose');
var CategorySchema = mongoose.Schema({
  name: String,
});

var CategoryModel = mongoose.model('categories', CategorySchema);
mongoose.model;
module.exports = CategoryModel;
