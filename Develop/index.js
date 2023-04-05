// TODO: Include packages needed for this application
const generateReadMe = require('./utils/generateMarkdown');
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
      name: 'installation',
      message: 'How does a user install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How might a user use your project?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Paste your github repo URL here:',
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
  
  ])
  
// TODO: Create a function to write README file
.then((answers) => {
  const content = generateReadMe(answers)
  
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
