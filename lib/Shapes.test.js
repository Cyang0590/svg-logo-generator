const Square = require('./Square');
const Circle = require('./Circle');
const Triangle = require('./Triangle');
// import the Square, Circle, and Triangle class from the lib folder

// run test for the square
describe('Square', () => {
    it('should render properly', () => {
        const expected = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect width="200" height="200" style="fill:blue" />

        <text x="100" y="115" font-size="60" text-anchor="middle" fill="red">SVG</text>
        </svg>
        `
        const shape = new Square();
        shape.setColor("blue");
        shape.setTextColor("red");
        shape.setText("SVG");

        expect(shape.render()).toEqual(expected);
    })
})

// run test for the circle
describe('Circle', () => {
    it('should render properly', () => {
        const expected = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="green" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">GIL</text>
        </svg>
        `
        const shape = new Circle();
        shape.setColor("green");
        shape.setTextColor("red");
        shape.setText("GIL");
        expect(shape.render()).toEqual(expected);
    })
})

// run test for the triangle
describe('Triangle', () => {
    it('should render properly', () => {
        const expected = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 18 244, 182 56, 182" style="fill:blue;stroke:purple;stroke-width:1" />

        <text x="155" y="160" font-size="60" text-anchor="middle" fill="orange">MOV</text>
        </svg>
        `
        const shape = new Triangle();
        shape.setColor("blue");
        shape.setTextColor("orange");
        shape.setText("MOV");
        expect(shape.render()).toEqual(expected);
    });
});

