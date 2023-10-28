const Shape = require('./Shape');

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
}

module.exports = Square;