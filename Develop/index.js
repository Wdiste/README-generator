// TODO: Include packages needed for this application
const fs = require('fs');               // needed to read/write files
const inquirer = require('inquirer');   // needed to record input in node

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project'
    },
    {               // ----- begin body text input section -----
        type: 'input',
        name: 'Description',
        message: 'Enter a description for your project.'
    },
    {
        type: 'input',
        name: 'Table of Contents',
        message: 'Please record a table of contents by inputting strings seperated by \',\'.'
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
        type: 'choice',
        name: 'License',
        message: 'Select the relevant license.'
        // choice code to be added here
        // license will provide info in readme as well as badge in header
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('Success!'));
};

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
