// const generateLicense = require('license-generator');
// const inquirer = require('inquirer');
// const fs = require('fs');

// module.exports = (
// inquirer
// .prompt([
//     {
//         type:'input',
//         name:'name',
//         message: 'What is your first and last name?'
//       },
//       {
//         type:'input',
//         name:'year',
//         message:'Enter the year (YYYY format)'
//       },
//       {
//         type: 'list',
//         name: 'license',
//         message: 'What type of  license did you select for this project?',
//         choices:['MIT','none']
//       }
// ])
// .then ((answers) => {
//     const licenseText = licenseGen({license,authorName,year})
// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
  
//     if (license !== 'None') {
//       return fs.writeFile('./develop/LICENSE.txt',licenseText, (err) => {
//         if (err){ 
//         console.err(err);
//       }
//       console.log('license written!')
//     })
//     }
//   }
    
// })
// )