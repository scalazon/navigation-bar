const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

// eslint-disable-next-line import/no-dynamic-require
const database = require(path.resolve(__dirname, '../database/db.js'));
const app = express();

app.use(cors());
app.use(express.static('dist'));
app.use(bodyParser.json({ strict: false }));

app.get('/test', (req, res) => {
  res.status(200).send('Successfully connected!');
});
app.get('/products/navBarData', (req, res) => {
  database.getAll().then(productDataArray => {
    res.send(productDataArray);
  });
});

app.get('/products/productData', (req,res) => {
  database
    .getOne(req.body)
    .then(product => res.json(product[0]))
    // eslint-disable-next-line no-console
    .catch(console.error);
});

app.post('/cart/add', (req,res) => {
  let asin = req.body.data.asin;
  let quantity = req.body.data.quantity;
  console.log(req.body)
  database.getOne(asin).then(product => {
    database.addToCart(product, quantity)
      .then(res.send('added!'))
  });
})

app.post('/products/search', (req, res) => {
  const searchTerm = req.body.searchTerm
  res.send(`we received your search request for ${req.body.searchTerm}`)
})

app.get('/cart/total', (req,res) => {
  database.getCartSubtotal().then(data => {
    res.send(JSON.stringify(data))
  })
})

app.get('/cart/all', (req, res) => {
  database.getCart().then(cartItems => {
    res.send(cartItems)
  })
})

app.get('/cart/itemCount', (req,res) => {
  database.getCartItemCount().then(count => {
    res.send(JSON.stringify(count))
  })
})

app.delete('/cart/removeItem', (req, res) => {
  database.removeCartItem(req.body.asin).then(result => {
    res.send('deleted!')
  })
})



module.exports = app;

// console.log('proudt after GET is:', product)
// database.addToCart(product).then(() => {
//   res.send('success!')