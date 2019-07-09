const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(express.static('dist'));
app.use(bodyParser.json({strict: false}));


app.get('/hellotest', (req,res) => {
  res.status(200).send("Valid GET request from Express server")
})

module.exports = app;