const Shape = require('./Shape');

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        return `
        <svg version="1.1" width="300" height="250" xmlns="http://www.w3.org/2000/svg">

        <polygon points="200,10 300,220 100,220" style="fill:${this.shapeColor};stroke:purple;stroke-width:1" />

        <text x="205" y="180" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    }
}

module.exports = Triangle;
