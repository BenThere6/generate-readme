// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

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
            message: "Enter a description:",
            default: "Description pending"
        },
        {
            type: 'input',
            name: 'installation',
            message: "What are the instructions for installation?",
            default: "Instructions pending"
        },
        {
            type: 'input',
            name: 'usage',
            message: "What are the instructions for use?",
            default: "Instructions pending"
        },
        {
            type: 'input',
            name: 'contributing',
            message: "What are the instructions for contributing?",
            default: "Instructions pending"
        },
        {
            type: 'input',
            name: 'tests',
            message: "How do users test this?",
            default: "Tests pending"
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter your GitHub username:",
            default: "BenThere6"
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter your email:",
            default: "benjaminbirdsall@icloud.com"
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Enter credits:',
            default: "Credits pending"
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
                'Mozilla Public License 2.0',
                'ISC License',
                'GNU Affero General Public License'
            ],
        }
    ]) 
    .then(answers => {
        const markdown = generateMarkdown.generateMarkdown(answers);

        fs.writeFile('README.md', markdown, (err) => {
            if (err) {
                console.error('Error writing to file:', err);
            } else {
                console.log('File write operation complete.');
            }
            });
    })

