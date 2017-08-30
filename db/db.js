const MongoClient = require('mongodb').MongoClient

class Db {

	constructor() {
		this.url = "mongodb://localhost:27017/"
		this.db = null
	}

	async testDB() {
		console.log("testDb()");
		try{
			await MongoClient.connect("mongodb://localhost:27017/mydb", (err, db) => {
				if (err) throw err;
			  	console.log("TEST OK - Database created!")
			  	db.close()
			})
		} catch(error) { console.log("Test DB Error!")}
	}

	connectToDB(dbname) {
		return new Promise((resolve, reject)=>{
			this.mongourl = this.url+dbname
			try{
				MongoClient.connect(this.mongourl, (err, db) => {
					//if (err) throw err;
					 if (err) {
		                reject(err);
		            } else {
		                resolve(db);
		            }


				  	console.log(dbname+" Database created! "+ this.mongourl )
				  	this.db = db
				})
			} catch(error) { console.log(dbname+" connection Error!")}
		}
	}

    createCollectionDB(collectionName) {
	    try{
		  	this.db.createCollection(collectionName, (err, res)=>{
		    if (err) throw err;
		    	console.log("Collection " + collectionName + " created."+this.mongourl );
		  	});
	    } catch(error) { console.log("createCollectionDB Error!")}
	}

	async insertInCollectionDB(collectionName, data) {
		//let data = { address: "Park Lane 38" };
	    try{
		  	await this.db.collection(collectionName).insertOne(data, (err, res)=>{
			    if (err) throw err;
			    console.log("1 document inserted"+this.mongourl );
			});


	    } catch(error) { console.log("insertInCollectionDB Error!")}
	}

	async queryDB(collectionName, query){
		try{
			//let query = { address: "Park Lane 38" };
			await this.db.collection(collectionName).find(query).toArray(function(err, result) {
				if (err) throw err;
				console.log(result);
				console.log("queryDB "+this.mongourl );
			});
		} catch(error) { console.log("queryDB Error!")}
	}

	async dropCollectionDB(collectionName){
		try{
			await this.db.collection("customers").drop(function(err, delOK) {
			    if (err) throw err;
			    if (delOK) console.log("Collection deleted");
			});
		} catch(error) { console.log("dropCollectionDB Error!")}
	}

}

exports.Db = Db;