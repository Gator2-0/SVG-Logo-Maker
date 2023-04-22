const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
const fs = require('fs');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)


inquirer
  .prompt([
    {
      type: 'maxlength-input',
      message: 'What text do you want in your logo (3 letters max)?',
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
    let shape;
    switch(response.shapes){
      case 'triangle':
        shape = 'polygon points="150,10 250,180 50,180"';
        break;
      case 'circle':
        shape = 'circle cx="100" cy="100" r="35%" '
        break;
      case 'square':
        shape = 'rect  width="300" height="200"'
        break; 
    }
    console.log('shape color')
    console.log(response.shapeColor);

    fs.writeFile('test.svg',
    `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <${shape} style="fill:${response.shapeColor};stroke-width:3;stroke:rgb(0,0,0)" />
    <text x="50" y="110" font-size="50" font-weight="bold" fill="${response.textColor}">SVG</text>
  </svg>`,(err) =>
  err ? console.error(err) : console.log('Success!'))
 
  }
    
  );
