const Shape = require('./Shape');

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

}

module.exports = Triangle;