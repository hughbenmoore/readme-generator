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
    }
];

//Have about 9 total questions

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses)=> {
        writeToFile("rmgenerator.md",generateMarkdown({...responses}))
    });
}

// Function call to initialize app
init();


//Generate markdwon file
//In video, use index.js then show the readme