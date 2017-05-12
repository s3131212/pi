/*
Gregory–Leibniz series
π = 4/1 - 4/3 + 4/5 - 4/7 + 4/9 - 4/11 ....
*/
var pi = 0;
var i = 1;
while(true){
	pi = pi + ( 4 / i ) - ( 4 / ( i + 2 ) );

	i += 4;
	console.log(pi);
}
