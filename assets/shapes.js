const fs = require('fs');

class Shape {
  constructor(text, textColor, shapeColor){
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.shape;
  }

  render(){
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <${this.shape} style="fill:${this.shapeColor};stroke-width:3;stroke:rgb(0,0,0)" />
    <text x="100" y="110" font-size="50" font-weight="bold" fill="${this.textColor}">${this.text}</text>
    </svg>`
  }
  create(xml){
    console.log(`SVG created with info:\ntext:${this.text}\ntext color:${this.textColor}\nshape color:${this.shapeColor}`)

    fs.writeFile('logo.svg',xml, (error)=>error? console.log(error) : console.log('SVG saved in location ./logo.svg!!'));
  }
}

class Square extends Shape {
  constructor(text, textColor, shapeColor){
    super(text, textColor, shapeColor)
    this.shape = 'rect width="300" height="200" x="5"';
  }
}

class Circle extends Shape{
  constructor(text, textColor, shapeColor){
    super(text, textColor, shapeColor)
    this.shape = 'circle cx="60" cy="100" r="35%"';
  }
}

class Triangle extends Shape{
  constructor(text, textColor, shapeColor){
    super(text, textColor, shapeColor)
    this.shape = 'polygon points="150,10 250,180 50,180"';
  }
}

module.exports = {Triangle, Circle, Square};