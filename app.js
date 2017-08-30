// Importing node modules
//import express from 'express';
const express = require("express")
const app = express();
// Importing source files
const {BittrexAPI} = require("./restClient/BittrexAPI")
const bittrex = new BittrexAPI()

const {Db} = require("./db/db")
db = new Db()

const {Script} = require("./algorithms/Script")
var algorithm = new Script()
//app.use('/', routes);

// arrow functions
const server = app.listen(3000, () => {
	// destructuring
  const {address, port} = server.address();


  // string interpolation:
  console.log(`Example app listening at http://${address}:${port}`);

  //bittrex.getorderbook('btc','ltc','both').then((res)=>{{console.log(res)}})
  //bittrex.getmarkethistory('btc','ltc').then((res)=>{{console.log(res)}})
  //bittrex.getticker('btc','ltc').then((res)=>{{console.log(res)}})
  const maxPos = 2880 //24h*60segs *2
  var lastmarketData = []
  async function start() {
  	let query = { address: "Park Lane" };

  		//db.testDB()
  		db.connectToDB("dbprueba").then(()=>{
  		db.createCollectionDB('prueba')
  	})//.then(()=>{
  		//db.createCollectionDB('collectionName')
  	//}).then(()=>{
		//db.insertInCollectionDB('collectionName', query)
  	//}).then(()=>{
		//db.queryDB('collectionName', query)
	//}).then(()=>{
		//db.dropCollectionDB('collectionName')
	//})


/*
  	const pair1 = "BTC"
  	const pair2 = "LTC"
  	if (lastmarketData.length == maxPos) {
  		lastmarketData.shift()
		bittrex.getticker(pair1, pair2).then((res)=>{
			//console.log(res)
			lastmarketData.push(res)
		})

  	} else {
  			let ticker = await bittrex.getticker(pair1, pair2)
			console.log(ticker)
			lastmarketData.push(ticker.result)

	 }

  	console.log(lastmarketData)
  	//algorithm.init()
*/



  }


  let robotinterval = setInterval(start, 500)


});