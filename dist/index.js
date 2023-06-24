const inquirer = require('inquirer')
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)
// const fs = require('fs');
// TODO: Create an array of questions for user input
// ADD VALIDATION TO QUESTIONS!!!!!!!
inquirer.prompt([
    {
        type: 'maxLength-input',
        name: 'brand',
        message: 'What are the initials of your brand? (up to 3 characters):',
        maxLength: 3,
        validate: brandInput => {
            if(brandInput) {
            return true;
             } else {
            console.log("please enter a brand name")
             return false;
             }
         }
     },
 ]).then(console.log)
 