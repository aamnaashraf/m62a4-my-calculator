#! /usr/bin/env node
// Shabang
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// Conditional Statement
if (answer.operator === "Addition") {
    console.log(chalk.green(answer.firstNumber + answer.secondNumber));
}
else if (answer.operator === "Subtraction") {
    console.log(chalk.green(answer.firstNumber - answer.secondNumber));
}
else if (answer.operator === "Multiplication") {
    console.log(chalk.green(answer.firstNumber * answer.secondNumber));
}
else if (answer.operator === "Division") {
    console.log(chalk.green(answer.firstNumber / answer.secondNumber));
}
else {
    console.log(chalk.red("Please enter valid operator"));
}
