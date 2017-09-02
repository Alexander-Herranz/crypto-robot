require('dotenv').config()
const { MongoClient } = require('mongodb')
const promisify = require('es6-promisify')


let _connection

const connect = (url) => {
  if (!process.env.MONGO_CONNECTION_STRING) {
    throw new Error(`Environment variable MONGO_CONNECTION_STRING must be set to use API.`)
  }
  let prom = promisify(MongoClient.connect)(url)
  console.log(prom)
  return prom
};

/**
 * Returns a promise of a `db` object. Subsequent calls to this function returns
 * the **same** promise, so it can be called any number of times without setting
 * up a new connection every time.
 */
const connection = (url) => {

  if (!_connection) {
    _connection = connect(url)
  }
  return _connection
}
exports.connection = connection

class Db {

	constructor(dbName) {
    this.dbName = dbName
	}

  async getCollection(collectionName) {
    try{
      const db = await connection(process.env.MONGO_CONNECTION_STRING+this.dbName )

      let getCol = await db.collection(collectionName)
      if (process.env.TEST=='TEST'){
        console.log('Database Name: '+this.dbName)
        console.log('1 TEST OK - '+collectionName+' - Database created!')
      }
        return getCol
    } catch(error) { console.log("getCollection DB Error!") }
  }

	async insertInCollection(collection, data) {
	    try{
        let insert = await collection.insertOne(data)
        if (process.env.TEST=='TEST'){
          console.log('2- insertInCollectionDB OK')
          console.log(data)
        }
		  	return insert
	    } catch(error) { console.log(" insertInCollectionDB Error!") }
	}

  async getOneFromQuery (collection, query){
    try{
      let result = await collection.find(query).limit(1).toArray()
      if (process.env.TEST=='TEST'){
        console.log('3- query One OK')
        console.log(result)
      }
      return result
    } catch(error) { console.log("queryDB Error!")}
  }

	async getAllFromQuery(collection, query){
		try{
      let result = await collection.find(query).toArray()
      if (process.env.TEST=='TEST'){
        console.log('4- query All OK')
        console.log(result)
      }
      return result
		} catch(error) { console.log("queryDB Error!")}
	}

  async listCollecton(collection){
    try{
      let list = await collection.find().toArray()
      if (process.env.TEST=='TEST'){
        console.log('5- List All elems in Collection OK');
        console.log(list)
      }
      return list
    } catch(error) { console.log( "listCollecton Error!")}
  }

	async dropCollection(collection){
		try{
      let drop = await collection.drop()
      if (process.env.TEST=='TEST'){
        console.log('6 - dropCollectionDB OK')
      }
      return drop
		} catch(error) { console.log("dropCollectionDB Error!")}
	}

}

exports.Db = Db
