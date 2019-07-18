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

module.exports = app;
