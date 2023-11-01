const inquirer = require('inquirer');
const fs = require('fs');
const Square = require('./lib/Square');
const Circle = require('./lib/Circle');
const Triangle = require('./lib/Triangle');


// creating an command prompt
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter your desire text (up to 3 characters)',
            name: 'text',
        },
        {
            type: 'input',
            message: 'What is the color of your text?',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'Please choose your shape?',
            name: 'shape',
            choices: ['Square', 'Triangle', 'Circle']
        },
        {
            type: 'input',
            message: 'What is the color for the shape?',
            name: 'shapeColor',
        },
    ])
    // check and make user the user input is 1~3 charcters
    .then((data) => {
        console.log(data)
        var userInput = "";
        if (data.text.length > 0 && data.text.length < 4) {
           
            userInput = data.text;
        } else {
            
            console.log("Invalid input. The text field can only contain 1 ~3 characters");
            return;
        }
    
    // check for user selection on the shapes
        let shape;
        if (data.shape == 'Square') {
            shape = new Square(data.text, data.textColor, data.shapeColor)
        }
        else if (data.shape == 'Triangle') {
            shape = new Triangle(data.text, data.textColor, data.shapeColor)
        } 
        else if (data.shape == 'Circle') {
            shape = new Circle(data.text, data.textColor, data.shapeColor)
        }
        console.log(shape);
        // create an file call logo.svg
        fs.writeFile('logo.svg', shape.render(), (err) =>
        err ? console.log(err) : console.log('success! Generated logo.svg')
        );
       
    }); 

    