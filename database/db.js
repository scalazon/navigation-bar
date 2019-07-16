const mongoose = require('mongoose');
const connection = require('./index')

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  url: String,
  asin: String,
  productTitle: String,
  bulletPoints: String,
  price: Number,
  category: String,
  attributes: String,
  totalImages: Number,
  imageName: String
});

const Product = mongoose.model('Product', ProductSchema);

module.exports.getAll = () => (
  Product.find({})
  .catch(console.error)
)

