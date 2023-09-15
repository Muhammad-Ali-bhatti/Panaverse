import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
        name: "Username",
        type: "input",
        message: "Enter Your Name",
    },
    {
        name: "Age",
        type: "input",
        message: "Enter Your Age",
    },
    {
        name: "Gender",
        type: "list",
        message: "Select Your Gender",
        choices: ["Male", "Female", "Pefer Not Too"]
    },
]);

console.log(`Your name is ${answer.Username}. Your Age is ${answer.Age}. Your Gender is ${answer.Gender}`);