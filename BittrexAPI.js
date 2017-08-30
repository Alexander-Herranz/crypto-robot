const request = require("request")

//export default
class BittrexAPI {

 	constructor(market){
    	this.market = market ;
 	}

	async function getmarketsummary() {
	  let res = await req('https://bittrex.com/api/v1.1/public/getmarketsummary?market=btc-eth');
	  let body = await res.json();
	}

}

module.exports = BittrexAPI;