"use strict";
const input = document.getElementById("input");
const button = document.getElementById("printButton");
const output = document.getElementById("output");
function print() {
    const num = parseFloat(input.value);
    output.textContent = num.toString();
}
button.addEventListener("click", print);
