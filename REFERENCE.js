// use this as a reference for homework
// use 'npm init --y' to install npm for homework, creates package.json
// then'npm install inquirer@8.2.4' to download version 8 of inquirer


const inquirer = require('inquirer');
const fs = require('fs');


const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'fullName',
    },
    {
        type: 'input',
        message: 'What state do you live in?',
        name: 'location',
    },
    {
        type: 'input',
        message: 'Tell us a little about yourself.',
        name: 'bio',
    },
    {
        type: 'input',
        message: 'What is your linkedIn?',
        name: 'linkedIn',
    },
    {
        type: 'input',
        message: 'What is your github?',
        name: 'github',
    }
]
inquirer
    .prompt(questions)

    .then((data) => {
        //create template literal
        const contentTemplate = funcOne(data);

        fs.writeFile('index.html', contentTemplate, (err) => {
            err ? console.log(err) : console.log('Success!')
        });
    });

const funcOne = ({ fullName, location, bio, linkedIn, github }) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- JavaScript Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
            crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Document</title>
    </head>
    
    <body>
        <div class="p-5 text-center bg-light">
            <h1 class="mb-3">My name is: ${fullName}</h1>
            <h4 class="mb-3">My location is ${location}</h4>
            <h4 class="mb-3">A little about myself: <br> ${bio}</h4>
            <h4 class="mb-3">My linkedIn is ${linkedIn}</h4>
            <h4 class="mb-3">My Github is ${github}</h4>
    
            <a class="btn btn-primary" href="" role="button">Call to action</a>
        </div>
    </body>
    
    </html>`
};