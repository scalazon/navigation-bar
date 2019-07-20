const mongoose = require('mongoose');
const connection = require('./index');

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

module.exports.getAll = () => Product.find({}).catch(console.error);

module.exports.getOne = (asin) => {
  return Product.find({ asin })
    .limit(1)
  .catch(console.error);
};

module.exports.addToCart = (product, quantity) => {
  let newProduct = product[0];
  return Cart({
    asin: newProduct.asin,
    productTitle: newProduct.productTitle,
    price: newProduct.price,
    thumbnail: `https://hackmazon-thumbs.s3.amazonaws.com/Images/${newProduct.asin}_1.jpg`,
    quantity: quantity,
  })
    .save()
    .then(prod => {
      return prod;
    })
    .catch(console.error);
};

module.exports.getCart = () => Cart.find({}).catch(console.error);

module.exports.getCartSubtotal = () => {
  return Cart.find({})
  .then(result => {
    let sum = 0;
    for (let i = 0; i < result.length; i++) {
      sum += (result[i].price * result[i].quantity);
    }
    return sum;
  })
  .catch(console.error)
}

module.exports.getCartItemCount = () => {
  return Cart.find({})
  .then(result => {
    let sum = 0;
    for (let i = 0; i < result.length; i++) {
      sum += result[i].quantity;
    }
    return sum;
  })
  .catch(console.error)
}