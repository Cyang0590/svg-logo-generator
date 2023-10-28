const Shape = require('./Shape');

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
}

module.exports = Circle;