// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import generateMarkdown from "./utils/generateMarkdown.js";
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "username",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "description",
        message: "What is your description?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "installation",
        message: "What are your installation instructions?",
    },
    {
        type: "input",
        name: "usage",
        message: "What is your usage information?"
    },
    {
        type: "input",
        name: "license",
        message: "What is your license?"
    },
    {
        type: "input",
        name: "contributing",
        message: "What are your contribution guidelines?"
    },
    {
        type: "input",
        name: "tests",
        message: "What are your test instructions?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses)=> {
        writeToFile("README.md",generateMarkdown({...responses}));
        console.log("Successfully created README.md");
    });
}

// Function call to initialize app
init();
