"use strict";
let number = [1, 2, 3, 4, 5]; //Declaring Array
console.log("Acessing Elements Of the Array", number[0]); // To Acess Elements Of The Array We Use Index.
// Original Array
console.log("Original", number);
//Push
let push = number.push(6);
console.log("Push ", number);
//pop
let pop = number.pop();
console.log("Pop ", number);
//Shift
number.shift();
console.log("shift", number);
//unShift
number.unshift(1);
console.log("unshift", number);
//slice()
let slice = number.slice(0, 3);
console.log("Slice", slice);
//splice()
let splice = number.splice(0, 3, 7);
console.log("Splice()", splice);
//Conca
let concat = number.concat(10, 12);
console.log(number, concat);
