const { MongoClient } = require('mongodb');
const { MONGO_USER, MONGO_PASSWORD} = require('../config');

const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@hackmazon-navbar-c54z1.mongodb.net/test?retryWrites=true&w=majority`;
const options = {
  useNewUrlParser: true
};

const dbName = 'test';
const collectionName = 'test'

function getTest() {
  return MongoClient.connect(uri, options)
  .then(connection => {
    return connection
      .db(dbName)
      .collection(collectionName)
      .find({});
  })
  .then(result => {
    return result.toArray();
  })
  .catch(err => {
    console.log('Error in getTest', err);
  });
}

module.exports = {
  getTest
};