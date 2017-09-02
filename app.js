// Importing node modules
//import express from 'express'
global.__base = __dirname + '/'
const express = require("express")
const app = express()
// Importing source files
const {BittrexAPI} = require("./restClient/BittrexAPI")
const bittrex = new BittrexAPI()

const {Db} = require("./db/db")

const {Script} = require("./algorithms/Script")
var algorithm = new Script()
//app.use('/', routes);

// arrow functions
const server = app.listen(3000, () => {
	// destructuring
  const {address, port} = server.address()
  // string interpolation:
  console.log(`Example app listening at http://${address}:${port}`)
  const maxPos = 2880 //24h*60segs *2
  var lastmarketData = []

  //Date.now() --> TimeStamp
  if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
  }

  const db = new Db('testdatabase2')
  //async function getCol() {return await db.getCollection('BtcEthDB')}
  //const dbGetCol = getCol()
  //let robotinterval = setInterval(start, 3000)


  start()

  async function start() {
  	try {
      const dbGetCol = await db.getCollection('BtcEthDB')
      const pair1 = "BTC"
      const pair2 = "ETH"
      let intervaldata = setInterval(()=>getPeriodData(dbGetCol, pair1, pair2), 1000)
      //setTimeout(()=>{console.log('hola puta puta')}, 5000)
      db.dropCollection(dbGetCol)
      setTimeout(()=>{
        clearInterval(intervaldata);
        db.listCollecton(dbGetCol)
      }, 5000)
    } catch(error){ console.log(error) }
  }

  async function getPeriodData(collection, pair1, pair2){
    try {
      let ticker = await bittrex.getticker(pair1, pair2)
      let point = {}
      let json = JSON.parse(ticker)
      if (json.success){
         point = json.result
         point.Date = Date.now()
         await db.insertInCollection(collection, point)
      }  else {'ERROR Creating Point'}
    } catch(error){console.log('getPeriodData() error: ' +error)}

  }



})
