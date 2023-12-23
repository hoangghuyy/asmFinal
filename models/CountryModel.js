var mongoose = require('mongoose');
var CountrySchema = mongoose.Schema({
  name: String,
});

var CountryModel = mongoose.model('countries', CountrySchema);
mongoose.model;
module.exports = CountryModel;
