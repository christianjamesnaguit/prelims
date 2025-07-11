var calc = require('./calculation.js');

var rph = 300;
var hrs = calc.multiply(4, 6);
var gross = calc.multiply(rph, hrs);

var tax = 720;
var sss = 1200;
var fund = 300;
var ph = 400;
var deduct = calc.add(calc.add(tax, sss), calc.add(fund, ph));

var net = calc.subtract(gross, deduct);

console.log(net);


