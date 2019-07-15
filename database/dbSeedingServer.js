/*
This is meant to be spun up locally as-needed to clear the DB or bulk-load additional data. It draws on the same
db.js file as the production database does, it just pulls in methods that are only used for seeding.
Right now, these methods are:
 * Load Bulk Data - takes in an array of objects and loads them into the database, sends back a success message
 * Clear Products Collection - wipes everything in the products collection. Useful if our data sheet expands and I want to copy in everything fresh
*/

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const { getTest, dataLoader, deleteAllProducts } = require('../database/db')

app.use(bodyParser.json({strict: false}));

app.get('/', (req,res) => {
  res.send('Connected to DB Seeding Server');
})

app.get('/dbTest', (req, res) => {
  getTest().then(result => {
    res.send(result)
  });
});

app.post('/loadBulkData', (req,res) => {
  const productData = req.body;
  dataLoader(productData).then(result => {
    res.status(201).send("Data loaded!")
  })
})

app.delete('/clearProductsCollection', (req,res) => {
  deleteAllProducts().then(result => {
    res.status(200).send("All clear!")
  })
})
const port = 3000;
const host = '0.0.0.0';

app.listen(port, host, () => {
  console.log(`DB Seed Server server running http://${host}:${port}`);
});

