//exports.Animal = class {
var request = require("request")

class BittrexAPI {

  constructor(){
   this.url = 'https://bittrex.com/api/v1.1/public/'
   this._getMarkets = 'getMarkets'
   this._getcurrencies = 'getcurrencies'
   this._getticker = 'getticker'
   this._getmarketsummaries = 'getmarketsummaries'
   this._getorderbook = 'getorderbook'
   this._getmarkethistory = 'getmarkethistory'

  }

  doRequest(url) {
     return new Promise(function (resolve, reject) {
       request(url, function (error, res, body) {

         if (!error && res.statusCode == 200) {
           //console.log(body)
           resolve(body);
         } else {
           reject(error);
         }

       });
     }).catch((error) => {
      console.log(url + '--> Request error:');
      console.log(error)
    });
  }

//Bittrex Public API GET requests

  async getmarkets() {
    console.log("request------------>")
    try{
      let endpoint = this.url+this._getMarkets
      console.log(endpoint)
      let res = await this.doRequest(endpoint)
      return res
    } catch(error) {}
  }

  async getcurrencies() {
    console.log("request------------>")
    try{
      let endpoint = this.url+this._getcurrencies
      console.log(endpoint)
      let res = await this.doRequest(endpoint)
      return res
    } catch(error) {}
  }

  async getticker(pair1, pair2) {
    console.log("request------------>")
    try{
      let market = pair1 + '-' + pair2
      let endpoint = this.url+this._getticker+'?'+'market='+market
      console.log(endpoint)
      let res = await this.doRequest(endpoint)
      return res
    } catch(error) {}
  }

  async getmarketsummaries() {
    console.log("request------------>")
    try{
      let endpoint = this.url+this._getmarketsummaries
      console.log(endpoint)
      let res = await this.doRequest(endpoint)
      return res
    } catch(error) {}
  }

  async getorderbook(pair1, pair2, type) {
    console.log("request------------>")
    try{
      let market = pair1 + '-' + pair2
      let endpoint = this.url+this._getorderbook+'?'+'market='+market+'&'+'type='+type
      console.log(endpoint)
      let res = await this.doRequest(endpoint)
      return res
    } catch(error) {}
  }

  async getmarkethistory(pair1, pair2) {
    console.log("request------------>")
    try{
      let market = pair1 + '-' + pair2
      let endpoint = this.url+this._getmarkethistory+'?'+'market='+market
      console.log(endpoint)
      let res = await this.doRequest(endpoint)
      return res
    } catch(error) {}
  }


}

exports.BittrexAPI = BittrexAPI;