/*
Gregory–Leibniz series
π = 4/1 - 4/3 + 4/5 - 4/7 + 4/9 - 4/11 ....
Powered by decimal.js
*/
var precision = 50;

var Decimal = require('decimal.js');
Decimal.set({ precision: precision });
var pi = new Decimal(0);
var i = 1;
while(true){
	var v1 = new Decimal(4).dividedBy(i);
	var v2 = new Decimal(4).dividedBy(i + 2);
	pi = pi.plus(v1).minus(v2);

	i += 4;
	console.log(pi.toPrecision(precision));
}
