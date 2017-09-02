function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

async function testMongoAPI() {

  try {
    const pair1 = "BTC"
      const pair2 = "ETH"

      var prueba1 = await db.getCollection('prueba1')
      let query1 = {}
      query1.hola=getRandomInt(1,999)
      await db.insertInCollectionDB(prueba1, query1)
      let query2 = {}
      query2.hola=getRandomInt(1,999)
      await db.insertInCollectionDB(prueba1, query2)
      let query3 = {}
      query3.hola=getRandomInt(1,999)
      await db.insertInCollectionDB(prueba1, query3)
      let query4 = {}//{hola: 'prueba'}
      query4.hola=getRandomInt(1,999)
      await db.insertInCollectionDB(prueba1, query4)
      let query5 = {}//{hola: 'prueba'}
      query5.hola=getRandomInt(1,999)
      await db.insertInCollectionDB(prueba1, query5)
      let query6 = {}//{hola: 'prueba'}
      query6.hola=getRandomInt(1,999)
      await db.insertInCollectionDB(prueba1, query6)
      let query7 = {}//{hola: 'prueba'}
      query7.hola=getRandomInt(1,999)
      await db.insertInCollectionDB(prueba1, query7)
      await db.queryDB(prueba1, query2)
      await db.listCollecton(prueba1)
      await db.dropCollectionDB(prueba1)
  } catch(error){ console.log(error) }


}
