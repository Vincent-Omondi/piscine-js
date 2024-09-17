import { readdir } from 'fs/promises';
import { resolve } from 'path';

async function countFiles(directory = '.') {
  try {
    const dirPath = resolve(directory);
    
    const files = await readdir(dirPath);
    
    console.log(`${files.length}`);
  } catch (error) {
    console.error('Error reading the directory:', error.message);
  }
}

const args = process.argv.slice(2);
const directory = args[0] || '.';

countFiles(directory);
