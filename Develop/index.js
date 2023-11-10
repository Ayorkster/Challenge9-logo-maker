const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of this project:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'please describe your porject:',
      },
      {
        type: 'input',
        name: 'install',
        message: 'how do you install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'how do you use your porject?'
      },
      {
        type: 'list',
        name: 'licence',
        message: ['Apache','ISC', 'MIT','None']
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'what are the guidelines for contribution to your project?'
      },
      {
        type: 'input',
        name: 'test',
        message: 'how do you test your porject?'
      },
      {
        type: 'input',
        name: 'username',
        message: 'what is your GitHub username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'what is your email?'
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
