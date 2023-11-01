class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;

    }
     setColor(color) {
        this.shapeColor = color
    }
    setTextColor(textColor) {
        this.textColor = textColor
    }
    setText(text) {
        this.text = text
    }
}

module.exports = Shape;
