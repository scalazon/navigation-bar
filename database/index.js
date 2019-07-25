const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASS;

//by default, set the uri to the travis test route
const uri = `127.0.0.1`

//if we have data from an env file, create an atlas uri with that
if (MONGO_USER && MONGO_PASSWORD) {
  uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0-c54z1.mongodb.net/test?retryWrites=true&w=majority`
}

const mongoose = require('mongoose');

module.exports = mongoose.connect(uri, {useNewUrlParser:true, dbName:'products'});