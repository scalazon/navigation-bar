const { MongoClient } = require('mongodb');
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASS;
const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0-c54z1.mongodb.net/test?retryWrites=true&w=majority`
const options = {
  useNewUrlParser: true
};

function connect(uri) {
  return MongoClient.connect(uri).then(client => client.db());
}

module.exports = async function() {
  let databases = await connect(uri)
  return databases;
}