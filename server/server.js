const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { PORT } = require('../config.js');
const app = express();

const port = process.env.PORT || 3000;
app.use(express.static('dist'));
app.use(
  bodyParser.json({
    strict: false
  })
);

app.get('/hellotest', (req,res) => {
  res.send("Hello from my Docker container")
})

app.listen(port, () => {
  console.log(`The shenanigans have started on aisle ${port}`);
});
