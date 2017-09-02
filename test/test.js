// Importing node modules
//import express from 'express';
const express = require("express")
const app = express()
// Importing source files
const {BittrexAPI} = require("../restClient/BittrexAPI.js")
const bittrex = new BittrexAPI()

const {Db} = require("../db/db")
const db = new Db('testdatabase2')

const server = app.listen(3000, () => {
	// destructuring
  const {address, port} = server.address()
  // string interpolation:
  console.log(`Example app listening at http://${address}:${port}`)
  const maxPos = 2880 //24h*60segs *2
  var lastmarketData = []

  //let robotinterval = setInterval(testMongoAPI, 3000)
  testMongoAPI()
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  async function testMongoAPI() {
    try {
      const dbGetCol = await db.getCollection('BtcEthDB')
      //var prueba1 = await db.getCollection('prueba1')
      let query1 = {}
      query1.hola=getRandomInt(1,999)
      await db.insertInCollection(dbGetCol, query1)
      let query2 = {}
      query2.hola=getRandomInt(1,999)
      query2.uno="dos"
      await db.insertInCollection(dbGetCol, query2)
      let query3 = {}
      query3.hola=getRandomInt(1,999)
      query3.uno="dos"
      await db.insertInCollection(dbGetCol, query3)
      let query4 = {}//{hola: 'prueba'}
      query4.hola=getRandomInt(1,999)
      query4.uno="dos"
      await db.insertInCollection(dbGetCol, query4)
      let query5 = {}//{hola: 'prueba'}
      query5.hola=getRandomInt(1,999)
      await db.insertInCollection(dbGetCol, query5)
      let query6 = {}//{hola: 'prueba'}
      query6.hola=getRandomInt(1,999)
      await db.insertInCollection(dbGetCol, query6)
      let query7 = {}//{hola: 'prueba'}
      query7.hola=getRandomInt(1,999)
      await db.insertInCollection(dbGetCol, query7)
      await db.getOneFromQuery(dbGetCol, query2)
      let cond1 = {}
      cond1.uno="dos"
      await db.getAllFromQuery(dbGetCol, cond1)
      await db.listCollecton(dbGetCol)
      await db.dropCollection(dbGetCol)
    } catch(error){ console.log(error) }
  }


})
