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
    return `![GitHub license](https://...)`//finish the link somehow idk
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return writeFile(idk)
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(content) {
  const content = {title, description, installation, usage, contributing, tests, license, github} ;
  const READMEContent = `
 # ${title}
 ## ${description}
 ## ${ToC}
  - [Installation](#installation)

  - [Usage](#usage)
  
  - [License](#license)
  
  - [Contributing](#contributing)
  
  - [Tests](#tests)
  
  -* [Questions](#questions)
  ## ${installation}
  ## ${usage}
  ${github}
  ## ${credits}
  ## ${license}
  ## ${tests}

  
  `;
}

module.exports = generateMarkdown;
