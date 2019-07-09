const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const { getTest } = require('../database/db')

app.use(express.static('dist'));
app.use(bodyParser.json({strict: false}));

app.get('/hellotest', (req,res) => {
  res.status(200).send("Valid GET request from Express server")
})

app.get('/dbTest', (req, res) => {
  getTest().then(result => {
    res.send(result)
  });
});

module.exports = app;