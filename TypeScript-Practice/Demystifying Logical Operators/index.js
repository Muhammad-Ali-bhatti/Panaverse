"use strict";
let x = 10;
let y = 15;
// And Operators
console.log((x > 20) && (x > 5)); // false and false = false 
console.log((x < 20) && (x < y)); // true and true = true
// Or Operators
console.log((x > y) || (y > x)); //flase Or True = True
console.log((x > y) || (x < 5)); // false or false = false
//Not Operator 
console.log(!(x < y));
