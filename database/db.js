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
  imageName: String,
});

const Product = mongoose.model('Product', ProductSchema);

const CartSchema = new Schema({
  asin: String,
  productTitle: String,
  price: Number,
  thumbnail: String,
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports.getAll = () => Product.find({}).catch(console.error);
