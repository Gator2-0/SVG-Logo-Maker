const fs = require('fs');

class Shape {
  constructor(text, textColor, shapeColor, x, y){
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.shape;
    this.x;
    this.y
  }

  render(){
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <${this.shape} style="fill:${this.shapeColor};stroke-width:3;stroke:rgb(0,0,0)" />
    <text x="${this.x}" y="${this.y}" font-size="50" font-weight="bold" fill="${this.textColor}">${this.text}</text>
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
    this.shape = 'rect width="290" height="180" x="5" y="5"';
    this.x = 100;
    this.y = 100;
  }
}

class Circle extends Shape{
  constructor(text, textColor, shapeColor){
    super(text, textColor, shapeColor)
    this.shape = 'circle cx="100" cy="100" r="35%"';
    this.x = 50;
    this.y = 110;
  }
}

class Triangle extends Shape{
  constructor(text, textColor, shapeColor){
    super(text, textColor, shapeColor)
    this.shape = 'polygon points="150,10 250,180 50,180"';
    this.x = 95;
    this.y = 150;
  }
}

module.exports = {Triangle, Circle, Square};