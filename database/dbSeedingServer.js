const mongoose = require('mongoose');
const connection = require('./index');
const json = require('./rawdata.json');

// mongoose.connect(`mongodb://127.0.0.1`, {useNewUrlParser:true, dbName:'products'});

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
  quantity: { type: Number, default: 1 },
  thumbnail: String,
});

const Cart = mongoose.model('Cart', CartSchema);

Product.insertMany(json, function(err,result) {
  if (err) {
    console.log(err)
    mongoose.disconnect()
  } else {
    console.log('all data is successfully inserted')
    mongoose.disconnect()
  }
});


