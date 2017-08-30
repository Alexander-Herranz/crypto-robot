//exports.Animal = class {
const talib = require("talib")
const fs = require('fs');
const {TulipLib} = require('../techLib/TulipLib');
const tulip = new TulipLib()

class Script {

  constructor() {

  }

//Tulip Technical indicators

  testTulipLib() {
    try{

      tulip.getTulipInfo()
    } catch(error) {}
  }

  getMarketData() {
    try{
      let marketContents = fs.readFileSync('examples/marketdata.json','utf8');
      let marketData = JSON.parse(marketContents);
    } catch(error) {}
  }

  testTulipFunc1() {
    try{
      return tulip.testSMA3()
    } catch(error) {}
  }

  init() {
    console.log("start init------------>")
    //try{
    this.testTulipFunc1()
    //} catch(error) {}
  }



}

exports.Script = Script;