class Square {
  constructor(text, textcolor, shapeColor){
    this.text = text;
    this.textColor = textcolor;
    this.shapeColor = shapeColor;
  }

  svg(){
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" x="5" style="fill:${this.shapeColor};stroke-width:3;stroke:rgb(0,0,0)" />
    <text x="100" y="110" font-size="50" font-weight="bold" fill="${this.textColor}">${this.text}</text>
  </svg>`
  }
  
}
class Circle{
  constructor(text, textcolor, shapeColor){
    this.text = text;
    this.textColor = textcolor;
    this.shapeColor = shapeColor;
  }

  svg(){
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="35%" style="fill:${this.shapeColor};stroke-width:3;stroke:rgb(0,0,0)" />
    <text x="50" y="110" font-size="50" font-weight="bold" fill="${this.textColor}">${this.text}</text>
  </svg>`
  }


}

class Triangle{
  constructor(text, textcolor, shapeColor){
    this.text = text;
    this.textColor = textcolor;
    this.shapeColor = shapeColor;
  }

  svg(){
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,10 250,180 50,180" style="fill:${this.shapeColor};stroke-width:3;stroke:rgb(0,0,0)" />
    <text x="100" y="150" font-size="50" font-weight="bold" fill="${this.textColor}">${this.text}</text>
  </svg>`
  }

}

module.exports = {Triangle, Circle, Square};