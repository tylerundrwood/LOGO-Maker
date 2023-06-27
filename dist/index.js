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
     },{
     type: 'maxLength-input',
        name: 'color',
        message: 'What color would you like?',
        validate: colorInput => {
            if(colorInput) {
            return true;
             } else {
            console.log("please enter a color")
             return false;
             }
         }
     },{
        type: 'maxLength-input',
        name: 'shape',
        message: 'What shape would you like?',
        choices: 'square, circle, triangle',
        validate: shapeInput => {
            if(shapeInput) {
            return true;
             } else {
            console.log("please enter a color")
             return false;
             }
         }
        
     }
 ]).then(console.log)
