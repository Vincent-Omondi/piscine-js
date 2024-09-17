import fs from 'fs/promises';
import path from 'path';

async function tellMeWho(directoryPath) {
  try {
    // Read all files in the directory
    const files = await fs.readdir(directoryPath);

    // Process each file and extract guest names
    const guests = await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(directoryPath, file);
        const content = await fs.readFile(filePath, 'utf-8');
        const [lastName, firstName] = file.replace('.json', '').split('_');
        return { lastName, firstName };
      })
    );

    // Sort guests alphabetically by last name, then first name
    guests.sort((a, b) => {
      if (a.lastName === b.lastName) {
        return a.firstName.localeCompare(b.firstName);
      }
      return a.lastName.localeCompare(b.lastName);
    });

    // Print formatted guest list
    return guests.map((guest, index) => `${index + 1}. ${guest.lastName} ${guest.firstName}`);
  } catch (error) {
    console.error('Error:', error.message);
    return [];
  }
}

const directoryPath = process.argv[2];

if (!directoryPath) {
  console.error('Please provide a directory path as an argument.');
} else {
  tellMeWho(directoryPath).then((guests) => {
    guests.forEach((guest) => console.log(guest));
  });
}