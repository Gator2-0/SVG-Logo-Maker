const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What text do you want in your logo (3 letters max)?',
      name: 'text',
    },
    {
      type: 'input',
      message: 'What color do you want?',
      name: 'color',
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
        shape = '';
        break;
      case 'circle':
        shape = 'circle cx="100" cy="100" r="35%" '
        break;
      case 'square':
        shape = 'rect  width="300" height="200"'
        break; 
    }

    fs.writeFile('test.svg',
    `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <${shape} style="fill:${response.color};stroke-width:3;stroke:rgb(0,0,0)" />
  </svg>`,(err) =>
  err ? console.error(err) : console.log('Success!'))
 
  }
    
  );
