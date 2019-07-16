// const { MongoClient } = require('mongodb');
// const MONGO_USER = process.env.MONGO_USER;
// const MONGO_PASSWORD = process.env.MONGO_PASS;
// const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0-c54z1.mongodb.net/test?retryWrites=true&w=majority`
// const options = {
//   useNewUrlParser: true
// };

// function connect(uri) {
//   return MongoClient.connect(uri).then(client => client.db());
// }

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
    console.log('Error in getAll', err);
  });
}

function getCategories() {
  const dbName = 'products';
  const collectionName = 'products'
  return MongoClient.connect(uri, options)
  .then(connection => {
    return connection
      .db(dbName)
      .collection(collectionName)
      .distinct('category', {});
  })
  .then(result => {
    return result;
  })
  .catch(err => {
    console.log('Error in getCategories', err);
  });
};

function getNavBarData() {
  const dbName = 'products';
  const collectionName = 'products'
  return MongoClient.connect(uri, options)
  .then(connection => {
    return connection
      .db(dbName)
      .collection(collectionName)
      .find({})
      .project({productTitle: 1, asin: 1, category: 1});
  })
  .then(result => {
    return result.toArray();
  })
  .catch(err => {
    console.log('Error in getNavBarData', err);
  });

};

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
  dataLoader,
  deleteAllProducts,
  getAll,
  getNavBarData,
  getCategories
};