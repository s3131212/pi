/*
Machin-like formula (M.Wetherfield, 2004)
Powered by decimal.js
*/
var precision = 100;

var Decimal = require('decimal.js');
Decimal.set({ precision: precision });

var pi = new Decimal(4).times(new Decimal(
	new Decimal(1).dividedBy(107).atan().times(83))
	.plus(new Decimal(1).dividedBy(1710).atan().times(17))
	.minus(new Decimal(1).dividedBy(103697).atan().times(22))
	.minus(new Decimal(1).dividedBy(2513489).atan().times(24))
	.minus(new Decimal(1).dividedBy(18280007883).atan().times(44))
	.plus(new Decimal(1).dividedBy(7939642926390344818).atan().times(12))
	.plus(new Decimal(1).dividedBy(3054211727257704725384731479018).atan().times(22))
);
console.log(pi.toPrecision(precision));