const { MongoClient } = require('mongodb')
const promisify = require('es6-promisify')

let _connection

const connect = (url) => {
  if (!process.env.MONGO_CONNECTION_STRING) {
    throw new Error(`Environment variable MONGO_CONNECTION_STRING must be set to use API.`)
  }

  return promisify(MongoClient.connect)(url)
};

/**
 * Returns a promise of a `db` object. Subsequent calls to this function returns
 * the **same** promise, so it can be called any number of times without setting
 * up a new connection every time.
 */
const connection = () => {
  console.log('_connection')
  if (!_connection) {
    _connection = connect()

  }

  return _connection
};

//export default connection
exports.connection = connection

/*

class Db {

	constructor() {
		this.url = "mongodb://localhost:27017/"
		this.db = null
	}

	async getCollection(collectionName) {
		console.log("testDb()");
		try{
		  console.log("TEST OK - Database created!")
		  const db = await connection()
  		  return db.collection(collectionName)
		} catch(error) { console.log("Test DB Error!") }
	}

}
*/