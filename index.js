const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/Shape')
const Square = require('./lib/Square');
const Circle = require('./lib/Circle');
const Triangle = require('./lib/Triangle');



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
    .then((data) => {
        console.log(data)
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
        fs.writeFile('logo.svg', shape.render(), (err) =>
        err ? console.log(err) : console.log('success! Your SVG logo has been created')
        );
       
    }); 

    

