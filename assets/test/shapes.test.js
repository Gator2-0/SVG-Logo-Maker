const Shapes = require('../shapes.js');

describe('Shapes', ()=>{
  describe('Square', ()=>{
    it('should create a square svg', ()=>{
      const control = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" x="5" style="fill:blue;stroke-width:3;stroke:rgb(0,0,0)" />
    <text x="100" y="110" font-size="50" font-weight="bold" fill="black">test</text>
    </svg>`
      let svg = new Shapes.Square('test','black','blue');
      
      expect(svg.render()).toEqual(control)
    })
  });
  describe('Circle', ()=>{
    it('should create a Circle svg', ()=>{
      const control = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="100" r="35%" style="fill:blue;stroke-width:3;stroke:rgb(0,0,0)" />
    <text x="100" y="110" font-size="50" font-weight="bold" fill="black">test</text>
    </svg>`
      let svg = new Shapes.Circle('test','black','blue');
      
      expect(svg.render()).toEqual(control)
    })
  });
  describe('Triangle', ()=>{
    it('should create a Triangle svg', ()=>{
      const control = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,10 250,180 50,180" style="fill:blue;stroke-width:3;stroke:rgb(0,0,0)" />
    <text x="100" y="110" font-size="50" font-weight="bold" fill="black">test</text>
    </svg>`
      let svg = new Shapes.Triangle('test','black','blue');
      
      expect(svg.render()).toEqual(control)
    })
  });
})