class Shape {
    constructor(text, textColor, shapeColor) {
        if (text.length > 3) {
            throw new Error('`text` must contain at no more than 3 characters.');
          }
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

module.exports = Shape;
