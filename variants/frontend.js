import inquirer from 'inquirer';

const chooseFrontendTechnology = async () => {
  return await inquirer.prompt([
    {
      type: 'list',
      name: 'frontendTechnology',
      message: 'Choose a frontend technology:',
      choices: [
        'React',
        // 'Next.js (React)'
      ],
    },
    {
      type: 'list',
      name: 'frontendLanguage',
      message: 'Choose a programming language for frontend:',
      choices: ['JavaScript', 'TypeScript'],
    },
    {
      type: 'list',
      name: 'frontendStateManagement',
      message: 'Choose a state management library for frontend:',
      choices: ['Redux Toolkit', 'Zustand'],
    },
    {
      type: 'list',
      name: 'includeTestingLibrary',
      message: 'Do you want to include a testing library?',
      choices: ['Yes', 'No'],
    },
    {
      type: 'list',
      name: 'includeStorybook',
      message: 'Do you want to include Storybook?',
      choices: ['Yes', 'No'],
    },
  ]);
};

export default chooseFrontendTechnology;
