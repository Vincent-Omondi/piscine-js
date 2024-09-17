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
      const [lastName, firstName] = content.trim().split(', ');
      return `${lastName} ${firstName}`;
    });

    // Wait for all promises to resolve
    const guests = await Promise.all(guestPromises);

    // Sort guests alphabetically
    guests.sort((a, b) => a.localeCompare(b));

    // Print formatted guest list
    guests.forEach((guest, index) => {
      console.log(`${index + 1}. ${guest}`);
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Get the directory path from command line arguments
const directoryPath = process.argv[2];

if (!directoryPath) {
  console.error('Please provide a directory path as an argument.');
} else {
  tellMeWho(directoryPath);
}