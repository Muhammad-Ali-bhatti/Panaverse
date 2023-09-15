
const input = document.getElementById("input") as HTMLInputElement;
const button = document.getElementById("printButton") as HTMLButtonElement;
const output = document.getElementById("output") as HTMLOutputElement;


function print():void{
    const num = parseFloat(input.value);
    output.textContent = num.toString();
}

button.addEventListener("click", print);