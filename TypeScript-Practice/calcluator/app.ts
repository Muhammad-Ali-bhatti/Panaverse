const number1 = document.getElementById("1stnum") as HTMLInputElement;
const number2 = document.getElementById("2ndnum") as HTMLInputElement;

const addition = document.getElementById("Addition") as HTMLButtonElement;
const substraction = document.getElementById("substraction") as HTMLButtonElement;
const multiplication = document.getElementById("multiplication") as HTMLButtonElement;
const division = document.getElementById("division") as HTMLButtonElement;

const output = document.getElementById("output") as HTMLOutputElement;

function add():void {
    const num1 = parseInt(number1.value);
    const num2 = parseInt(number2.value);
    let result = num1 + num2;
    output.textContent = result.toString();
}


function sub():void {
    const num1 = parseInt(number1.value);
    const num2 = parseInt(number2.value);
    let result = num1 - num2;
    output.textContent = result.toString();
}


function multi():void {
    const num1 = parseInt(number1.value);
    const num2 = parseInt(number2.value);
    let result = num1 * num2;
    output.textContent = result.toString();
}

function divide():void {
    const num1 = parseInt(number1.value);
    const num2 = parseInt(number2.value);
    let result = num1 / num2;
    output.textContent = result.toString();
}

addition.addEventListener("click", add);
substraction.addEventListener("click", sub);
multiplication.addEventListener("click", multi);
division.addEventListener("click", divide);