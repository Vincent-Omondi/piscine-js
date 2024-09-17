import fs from 'fs/promises';
import path from 'path';

async function tellMeWho(directoryPath) {
  try {
    // Read all files in the directory
    const files = await fs.readdir(directoryPath);

    // Process each file and extract guest names
    const guestPromises = files.map(async (file) => {
      const filePath = path.join(directoryPath, file);
      const content = await fs.readFile(filePath, 'utf-8');
      const [lastName, firstName] = file.replace('.json', '').split('_');
      return { lastName, firstName };
    });

    // Wait for all promises to resolve
    const guests = await Promise.all(guestPromises);

    // Sort guests alphabetically by last name, then first name
    guests.sort((a, b) => {
      const lastNameComparison = a.lastName.localeCompare(b.lastName);
      if (lastNameComparison === 0) {
        return a.firstName.localeCompare(b.firstName);
      }
      return lastNameComparison;
    });

    // Print formatted guest list
    guests.forEach((guest, index) => {
      console.log(`${index + 1}. ${guest.lastName} ${guest.firstName}`);
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

const directoryPath = process.argv[2];

if (!directoryPath) {
  console.error('Please provide a directory path as an argument.');
} else {
  tellMeWho(directoryPath);
}