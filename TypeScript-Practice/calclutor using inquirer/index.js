import inquirer from "inquirer";
const input = await inquirer.prompt([{
        name: "Number1",
        type: "number",
        message: "Enter Number",
    },
    {
        name: "Number2",
        type: "number",
        message: "Enter Number",
    },
    {
        name: "Option",
        type: "list",
        choices: ["+", "-", "/", "x"],
    },
]);
let result;
switch (input.Option) {
    case "+":
        result = input.Number1 + input.Number2;
        console.log(result);
        break;
    case "-":
        result = input.Number1 - input.Number2;
        console.log(result);
        break;
    case "/":
        result = input.Number1 / input.Number2;
        console.log(result);
        break;
    case "x":
        result = input.Number1 * input.Number2;
        console.log(result);
        break;
}
