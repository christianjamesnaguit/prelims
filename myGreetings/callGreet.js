var greet = require('./greet.js');

var john = new greet('John');
var jane = new greet('Jane');

console.log(john.greeting());
console.log(jane.greeting());