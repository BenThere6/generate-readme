// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is the title of your application? "
        },
        {
            type: 'input',
            name: 'description',
            message: "Enter a description: "
        },
        {
            type: 'input',
            name: 'installation',
            message: "What are the instructions for installation? "
        },
        {
            type: 'input',
            name: 'usage',
            message: "What are the instructions for use? "
        },
        {
            type: 'list',
            name: 'license',
            message: "Select a license: ",
            choices: [
                
            ]
        },
    ]) 

function writeToFile(fileName, data) {}

function init() {
    const markdown = generateMarkdown.generateMarkdown(data);
}

init();
