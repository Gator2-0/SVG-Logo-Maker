const inquirer = require('inquirer');

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
      name: 'confirm',
    },
    {
      type: 'input',
      message: 'What color do you want the shape to be?',
      name: 'shapeColor',
    },
  ])
  .then((response) =>
    console.log('finished')
  );
