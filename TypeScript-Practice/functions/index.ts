

let x = 10;
let y = 20;
// Normal Function
function add(x: number, y: number): number{
    return x + y;
}

console.log(add(10,13));
// Arrow Function
const addition = (x: number, y: number) => x+y;

let sum = addition(50, 50);
console.log(sum);