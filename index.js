const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

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
        message: 'please describe your project:',
      },
      {
        type: 'input',
        name: 'install',
        message: 'What do you need to install for this project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'how do you use your project?'
      },
      {
        type: 'list',
        name: 'license',
        choices: ['Apache','ISC', 'MIT','None']
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'what are the guidelines for contribution to your project?'
      },
      {
        type: 'input',
        name: 'test',
        message: 'how did you test your project?'
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
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>{
    if (err){
      console.log(err);
    }else{
      console.log('Congrats! Your README.md is finished')
    }
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeFile = generateMarkdown(answers);
    writeToFile('README.md', readmeFile);
  });
}

// Function call to initialize app
init();
