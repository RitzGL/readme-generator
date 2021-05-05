// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const render = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter README title: ',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Briefly describe the application: ',
  },
  {
    type: 'input',
    name: 'instalDesc',
    message: 'How do you install the application?',
  },
  {
    type: 'input',
    name: 'usageDesc',
    message: 'Briefly describe how the application is used: ',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose license',
    choices: ['MIT', 'GPLv3', 'AGPL'],
  },
  {
    type: 'input',
    name: 'licenseDesc',
    message: 'Briefly describe the license: ',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Mention contributors: ',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Briefly describe testing strategy: ',
  },
  {
    type: 'input',
    name: 'ghName',
    message: 'Enter GitHub name: ',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter email address: ',
    when: function (answers) {
      return answers;
    },
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // write body in here, function calls to other defined functions
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log('\nObject data received:');
    console.log(answers);
  });
}

// Function call to initialize app
init();
