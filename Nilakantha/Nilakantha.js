/*
Nilakantha's series
π = 3 + 4/(2x3x4) - 4/(4x5x6) + 4/(6x7x8) - 4/(8x9x10) + .....
*/
var pi = 3;
var i = 2;
while(true){
	pi = pi + ( 4 / (i*(i+1)*(i+2)) ) - ( 4 / ((i+2)*(i+3)*(i+4)) );
	i += 4; 
	console.log(pi);
}
