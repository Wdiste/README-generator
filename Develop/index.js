const fs = require('fs');                                           // needed to read/write files
const inquirer = require('inquirer');                               // needed to record input in node
const generateMarkdown = require('./utils/generateMarkdown');       // needed to recieve markdown template and license info


// array of questions for inquirer to prompt user
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'Enter the title of your project'
    },
    {               // ----- begin body text input section -----
        type: 'input',
        name: 'Description',
        message: 'Enter a description for your project.'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Please enter rules for installation.'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How do you use this application?'
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'How can I contribute to your project?'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Describe how to test the application.'
    },              // -----  end body text input section -----
    {
        type: 'list',
        name: 'License',
        message: 'Select the relevant license.',
        choices: ['APACHE', 'BOOST', 'BSD2', 'BSD3', 'GNUGPLv3', 'GNUGPLv2', 'GNUAGPLv2', 'GNULGPLv3', 'MIT', 'CCZU', 'EPL2', 'MPL2', 'UNLICENSE', 'No license'],
    },
    {
        type: 'input',
        name: 'Github',
        message: 'Enter your github username' // used to link profile
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Enter your email address' // used to list contact info
    },
];

// write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('Success!'));
};

// initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            // fill template with answers and save to a variable
            const readmeTemplate = generateMarkdown(answers);
            // write a new markdown file with the body being the template literal 
            writeToFile('README.md', readmeTemplate);
        })
 }

// Function call to initialize app
init();