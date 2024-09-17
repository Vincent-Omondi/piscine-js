import { readdir, readFile } from 'fs/promises';
import { resolve } from 'path';

async function listGuests(directory) {
  try {
    const dirPath = resolve(directory);
    const files = await readdir(dirPath);
    const fileReadPromises = files.map(file => readFile(resolve(dirPath, file), 'utf-8').catch(err => null));
    const fileContents = await Promise.all(fileReadPromises);

    const names = fileContents
      .filter(content => content !== null)  
      .map(content => content.trim())  
      .flatMap(content => content.split('\n')) 
      .map(line => line.trim())  
      .filter(line => line.length > 0);  

    if (names.length === 0) {
      console.log('No names found.'); // Debugging statement
    } else {
      names.sort((a, b) => {
        const [aLast, aFirst] = a.split(' ');
        const [bLast, bFirst] = b.split(' ');

        if (aLast === undefined || aFirst === undefined) return 1; // Handle undefined cases
        if (bLast === undefined || bFirst === undefined) return -1; // Handle undefined cases

        return aLast.localeCompare(bLast) || aFirst.localeCompare(bFirst);
      });

      names.forEach((name, index) => {
        const [lastname, firstname] = name.split(' ');
        
        if (lastname === undefined || firstname === undefined) {
          console.log(`${index + 1}. Invalid format: ${name}`);
        } else {
          console.log(`${index + 1}. ${lastname} ${firstname}`);
        }
      });
    }

  } catch (error) {
    console.error('Error processing the directory:', error.message);
  }
}

const args = process.argv.slice(2);
const directory = args[0] || '.';

listGuests(directory);
