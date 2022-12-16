// Imported required packages
// 'fs', 'path', 'inquirer', './utils/generateMarkdown'

// Array of questions for user input
const questions = [
  {
    // question object for github user name
  },
  {
      // question object for email

  },
  {
      // question object for project name
  },
  {
      // question object for the description
  },
  {
      // question object for license
  },
  {
      // question object for the installation instruction with default
  },
  {
      // question object for test with default
  },
  {
      // question object for usage of the repo
  },
  {
      // question object for contributing to the repo
  },
];

// Function to write README file using the user input
function writeToFile(fileName, data) {

  // TODO:
  // fs write function to create the README.md file
  // path package can be used to create the file path

}

// Function to initialize app
function init() {

  // TODO:
  // call inquirer prompt method for questions
  // inside .then callback
  // call generateMarkdown passing answer object as input argument
  // call writeFile passing file name and the returned value from generateMarkdown function as input arguments

}

init();
