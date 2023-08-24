// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is the title of your application?"
        },
        {
            type: 'input',
            name: 'description',
            message: "Enter a description:"
        },
        {
            type: 'input',
            name: 'installation',
            message: "What are the instructions for installation?"
        },
        {
            type: 'input',
            name: 'usage',
            message: "What are the instructions for use?"
        },
        {
            type: 'list',
            name: 'license',
            message: "Select a license:",
            choices: [
                'MIT License',
                'GNU General Public License v2',
                'GNU General Public License v3',
                'Apache License 2.0',
                '3-Clause BSD License',
                '2-Clause BSD License',
                'Creative Commons License',
                'Mozilla Public License 2.0',
                'Unlicense',
                'Eclipse Public License',
                'ISC License',
                'GNU Affero General Public License'
            ]
        }
    ]) 
    .then(answers => {
        console.log(answers)
    })

const markdown = generateMarkdown.generateMarkdown(data);
