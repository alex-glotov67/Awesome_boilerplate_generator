import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CURR_DIR = process.cwd();
const copyFile = promisify(fs.copyFile);
const mkdir = promisify(fs.mkdir);

async function copyTemplateFiles(templateDir, targetDir) {
  const filesToCopy = await fs.promises.readdir(templateDir);

  for (const file of filesToCopy) {
    const sourceFile = path.join(templateDir, file);
    const targetFile = path.join(targetDir, file);
    const fileStats = await fs.promises.stat(sourceFile);

    if (fileStats.isDirectory()) {
      await mkdir(targetFile, { recursive: true });
      await copyTemplateFiles(sourceFile, targetFile);
    } else {
      await copyFile(sourceFile, targetFile);
    }
  }
}

async function generateProject(projectName) {
  const templateDir = `${__dirname}/templates/ReactTemplate`;
  const targetDir = `${CURR_DIR}/${projectName}`;

  try {
    await mkdir(targetDir, { recursive: true });
    await copyTemplateFiles(templateDir, targetDir);
    console.log('Project generated successfully!');
  } catch (err) {
    console.error('Error generating project:', err);
  }
}

export default generateProject;
