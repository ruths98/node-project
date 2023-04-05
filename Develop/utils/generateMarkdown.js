const fs = require('fs')
const licenseGenerator = require('license-generator');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `![GitHub license](https://github.com/ruths98/node-project/blob/main/${license})`//finish the link somehow idk
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return fs.writeFile('./develop/LICENSE.txt',licenseText, (err) => {
      if (err){ 
      console.err(err);
    }
    console.log('license written!')
  })
  }
}
// TODO: Create a function to generate markdown for README
const generateReadMe = ({title, description, installation, usage, github, credits, license}) => 
   `
 # ${title}
 
 ## Description:
 ${description}

## Installation:
${installation}

 ## Usage:
 ${usage}
 Github:${github}

## Credits:
${credits}

## License:
${license}
${renderLicenseBadge(license)}
${renderLicenseLink(license)}
  `;
module.exports = generateReadMe;
