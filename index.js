// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
}
];

inquirer.prompt(questions)
.then((response) => {
    console.log(response);
    writeToFile('readMeTest.md', response)
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const outputString = `# ${data.title}`
 
    fs.writeFile(fileName, outputString, function(error) {
        if (error) {
            console.error("Error writing to file: ", error);
        } else {
            console.log('Success!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


