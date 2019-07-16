const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASS;
const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0-c54z1.mongodb.net/test?retryWrites=true&w=majority`

const mongoose = require('mongoose');

module.exports = mongoose.connect(uri, {useNewUrlParser:true, dbName:'products'});