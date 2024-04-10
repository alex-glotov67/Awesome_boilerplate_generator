import inquirer from 'inquirer';
import chooseFrontendTechnology from './variants/frontend.js';

async function main() {
  const { projectName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'Enter the name of your project:',
      validate: function (input) {
        if (/^([A-Za-z\-\\_\d])+$/.test(input)) return true;
        else return 'Project name may only include letters, numbers, underscores and hashes.';
      },
    },
  ]);

  const { projectType } = await inquirer.prompt([
    {
      type: 'list',
      name: 'projectType',
      message: 'What type of project do you want to generate?',
      choices: [
        'frontend',
        // 'backend',
        // 'fullstack'
      ],
    },
  ]);

  let technologies;
  if (projectType === 'frontend') {
    technologies = await chooseFrontendTechnology();
  }
  // Додайте обробку інших типів проектів

  const utils = await inquirer.prompt([
    {
      type: 'list',
      name: 'includeEnvFiles',
      message: 'Do you want to include .env and .env.example files?',
      choices: ['Yes', 'No'],
    },
    {
      type: 'list',
      name: 'generateReadme',
      message: 'Do you want to generate a README.md file?',
      choices: ['Yes', 'No'],
    },
  ]);

  console.log({ projectName, ...technologies, ...utils }); // Для перевірки вибору імені проекту та технологій
}

main();
