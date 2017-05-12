/*
Nilakantha's series
π = 3 + 4/(2x3x4) - 4/(4x5x6) + 4/(6x7x8) - 4/(8x9x10) + .....
Powered by decimal.js
*/
var precision = 50;

var Decimal = require('decimal.js');
Decimal.set({ precision: precision });
var pi = new Decimal(3);
var i = 2;
while(true){
	var v1 = new Decimal(4).dividedBy(i*(i+1)*(i+2));
	var v2 = new Decimal(4).dividedBy((i+2)*(i+3)*(i+4));
	pi = pi.plus(v1).minus(v2);

	i += 4;
	console.log(pi.toPrecision(precision));
}
