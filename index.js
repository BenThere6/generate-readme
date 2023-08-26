const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is the title of your application?",
            validate: function(input) {
                if (input.trim() === '') {
                  return "Title is required.";
                }
                return true;
              }
        },
        {
            type: 'input',
            name: 'description',
            message: "Enter a description:",
            validate: function(input) {
                if (input.trim() === '') {
                  return "Description is required.";
                }
                return true;
              }
        },
        {
            type: 'input',
            name: 'projectInformation',
            message: "Enter project information:",
            default: "This project is developed as part of a school assignment for Rutgers University. The code and documentation are created solely by BenThere6. While external contributions are not expected, this repository serves as a demonstration of my understanding of the concepts covered in the course."
        },
        {
            type: 'input',
            name: 'installation',
            message: "What are the instructions for installation?",
        },
        {
            type: 'input',
            name: 'usage',
            message: "What are the instructions for use?",
            validate: function(input) {
                if (input.trim() === '') {
                  return "Usage instructions are required.";
                }
                return true;
              }
        },
        {
            type: 'input',
            name: 'contributing',
            message: "What are the instructions for contributing?",
        },
        {
            type: 'input',
            name: 'tests',
            message: "How do users test this?",
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

        fs.writeFile('./utils/README.md', markdown, (err) => {
            if (err) {
                console.error('Error writing to file:', err);
            } else {
                console.log('File write operation complete.');
            }
            });
    })

