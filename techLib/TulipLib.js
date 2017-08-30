//exports.Animal = class {
var tulind = require('tulind');

class TulipLib {

  constructor(){
  	this.open   = [4,5,5,5,4,4,4,6,6,6];
	this.high   = [9,7,8,7,8,8,7,7,8,7];
	this.low    = [1,2,3,3,2,1,2,2,2,3];
	this.close  = [4,5,6,6,6,5,5,5,6,4];
	this.volume = [123,232,212,232,111,232,212,321,232,321];
  }


//Bittrex Public API GET requests

  getTulipInfo() {
  	console.log("Try Tulip Indicators version is:");
    try{
      	//let res = await this.doRequest(endpoint)
    	console.log("Tulip Indicators version is:");
    	console.log(tulind.version);
    	console.log("Tulip indicators");
		console.log(tulind.indicators);
		console.log("tulind.indicators --> All indicators");
		console.log("tulind.indicators.stoch:");
		console.log(tulind.indicators.stoch);
    } catch(error) {}
  }

  async testSMA3() {
    try{
      	//Do a simple moving average on close prices with period of 3.
		tulind.indicators.sma.indicator([this.close], [3],
			(err, results) => {
		  console.log("Result of sma3 is:");
		  console.log(results)
		  console.log(this.open.length +' ---> '+ results[0].length);
		});
    } catch(error) {}
  }

  async testStoch() {
    try{
      	//Functions that take multiple inputs, options, or outputs use arrays.
		//Call Stochastic Oscillator, taking 3 inputs, 3 options, and 2 outputs.
		tulind.indicators.stoch.indicator([this.high, this.low, this.close], [5, 3, 3],
			(err, results) => {
		  console.log("Result of stochastic oscillator is:");
		  console.log(results);
		});
    } catch(error) {}
  }


}

exports.TulipLib = TulipLib;