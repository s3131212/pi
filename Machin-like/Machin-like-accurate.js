/*
Machin-like formula
π/4 = 4arctan(1/5) - arctan(1/239)
Powered by decimal.js
*/
var precision = 100;

var Decimal = require('decimal.js');
Decimal.set({ precision: precision });

var pi = new Decimal(4).times(new Decimal(new Decimal(1/5).atan().times(4)).minus(new Decimal(1/239).atan()));
console.log(pi.toPrecision(precision));