const { MongoClient } = require('mongodb');
const { MONGO_USER, MONGO_PASSWORD} = require('../config');

const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@hackmazon-navbar-c54z1.mongodb.net/test?retryWrites=true&w=majority`;
const options = {
  useNewUrlParser: true
};



function getTest() {
  const dbName = 'test';
  const collectionName = 'test'
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

function getAll() {
  const dbName = 'products';
  const collectionName = 'products'
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


function dataLoader(JSONarray) {
  const dbName = 'products';
  const collectionName = 'products'
  return MongoClient.connect(uri, options)
  .then(connection => {
    return connection
      .db(dbName)
      .collection(collectionName)
      .insertMany(JSONarray);
  })
  .then(result => {
    return result;
  })
  .catch(err => {
    console.log('Error in getTest', err);
  });
}

function deleteAllProducts() {
  const dbName = 'products';
  const collectionName = 'products'
  return MongoClient.connect(uri, options)
  .then(connection => {
    return connection
      .db(dbName)
      .collection(collectionName)
      .remove({});
  })
  .then(result => {
    return result;
  })
  .catch(err => {
    console.log('Error in getTest', err);
  });
}

module.exports = {
  getTest,
  dataLoader,
  deleteAllProducts,
  getAll
};