const inquirer = require('inquirer')
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)
const { Triangle, Square, Circle } = require("./lib");
// const fs = require('fs');
// TODO: Create an array of questions for user input
// ADD VALIDATION TO QUESTIONS!!!!!!!
function writeToFile(fileName, answers) {
    // File is an empty string
    let svgString = "";
    //set the height and width of logo container
    svgString =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    
    svgString += "<g>";
   
    svgString += `${answers.shape}`;
let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }
  
  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;

  svgString += "</g>";

  svgString += "</svg>";

  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}
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
     type: 'input',
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
        type: 'input',
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
