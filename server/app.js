const dotenv = require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const { getAll, getCategories, getNavBarData } = require('../database/db')

app.use(cors());
app.use(express.static('dist'));
app.use(bodyParser.json({strict: false}));

app.get('/hellotest', (req,res) => {
  res.status(200).send("Valid GET request from Express server")
})

app.get('/products/rawJSON', (req, res) => {
  getAll().then(JSONArray => {
    res.send(JSONArray)
  });
});

app.get('/products/categories', (req,res) => {
  getCategories().then(categoryArray => {
    res.send(categoryArray)
  })
})

app.get('/products/navBarData', (req,res) => {
  getNavBarData().then(productDataArray => {
    res.send(productDataArray)
  })
})

module.exports = app;