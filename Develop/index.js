// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');
  // TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project called?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your project? What is it, what does it do, and why did you create it?',
    },
    {
      type: 'input',
      name: 'ToC',
      message: 'Do you want to add a table of contents?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How does a user install your project?',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'How might a user use your project?',
    },
    {
      type: 'input',
      name: 'screenshots',
      message: 'what are the screenshot URLs?',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Who would you like to give credit to for this project, outside of yourself?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What type of  license would you like to use for this project?',
      choices:['MIT','other']
    },
    {
      type: 'input',
      name: 'features',
      message: 'what are some features your project has?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What tests did you use for your application? How might someone run said test(s)?',
    },
  ])



// TODO: Create a function to write README file
.then((answers) => {
  answers = generateMarkdown(content);
  
  fs.writeFile('README.md', content, (err) =>
err ? console.log(err) : console.log('successfully created README.md file')
);
});

// TODO: Create a function to initialize app
function init() {
  console.log('node index.js')
}

// Function call to initialize app
init();
