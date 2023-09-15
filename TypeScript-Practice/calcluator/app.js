"use strict";
const number1 = document.getElementById("1stnum");
const number2 = document.getElementById("2ndnum");
const addition = document.getElementById("Addition");
const substraction = document.getElementById("substraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const output = document.getElementById("output");
function add() {
    const num1 = parseInt(number1.value);
    const num2 = parseInt(number2.value);
    let result = num1 + num2;
    output.textContent = result.toString();
}
function sub() {
    const num1 = parseInt(number1.value);
    const num2 = parseInt(number2.value);
    let result = num1 - num2;
    output.textContent = result.toString();
}
function multi() {
    const num1 = parseInt(number1.value);
    const num2 = parseInt(number2.value);
    let result = num1 * num2;
    output.textContent = result.toString();
}
function divide() {
    const num1 = parseInt(number1.value);
    const num2 = parseInt(number2.value);
    let result = num1 / num2;
    output.textContent = result.toString();
}
addition.addEventListener("click", add);
substraction.addEventListener("click", sub);
multiplication.addEventListener("click", multi);
division.addEventListener("click", divide);
