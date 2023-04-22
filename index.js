const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const Shapes = require('./assets/shapes');


inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);


inquirer
  .prompt([
    {
      type: 'maxlength-input',
      message: 'What text do you want in your logo?',
      name: 'text',
      maxLength: 3
    },
    {
      type: 'input',
      message: 'What color do you want?',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'What shape do you want to use?',
      choices: ['triangle','circle','square'],
      name: 'shapes',
    },
    {
      type: 'input',
      message: 'What color do you want the shape to be?',
      name: 'shapeColor',
    },
  ])
  .then((response) =>{
    let svg;
    switch(response.shapes){
      case 'triangle':
        svg = new Shapes.Triangle(response.text,response.textColor,response.shapeColor);
        svg.create(svg.render());
        break;
      case 'circle':    
        svg = new Shapes.Circle(response.text,response.textColor,response.shapeColor);
        svg.create(svg.render());
        break;
      case 'square':
        svg = new Shapes.Square(response.text,response.textColor,response.shapeColor);
        svg.create(svg.render());
        break; 
    }
  }
);
