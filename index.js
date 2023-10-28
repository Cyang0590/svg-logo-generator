const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const Square = require('./lib/Square');
const Circle = require('./lib/Circle');
const Triangle = require('./lib/Triangle');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter your desire text',
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
            choices: ['Square', 'Triangle', 'Circle', 'Hexagon']
        },
        {
            type: 'input',
            message: 'What is the color for the shape?',
            name: 'shapeColor',
        },
    ])
    .then((data) => {
        fs.writeFile('logo.svg', (err) =>
        err ? console.log(err) : console.log('success!')
        );
       
    }); 