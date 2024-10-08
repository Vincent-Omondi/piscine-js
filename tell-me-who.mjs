import fs from 'fs/promises';
import path from 'path';

async function tellMeWho(directoryPath) {
  try {
    // Read all files in the directory
    const files = await fs.readdir(directoryPath);

    // Process each file and extract guest names
    const guests = files
      .filter(file => file.endsWith('.json'))
      .map(file => {
        const [firstName, lastName] = file.replace('.json', '').split('_');
        return { firstName, lastName };
      });

    // Sort guests alphabetically by last name, then first name
    guests.sort((a, b) => {
      const lastNameComparison = a.lastName.localeCompare(b.lastName);
      if (lastNameComparison === 0) {
        return a.firstName.localeCompare(b.firstName);
      }
      return lastNameComparison;
    });

    // Format and return guest list
    return guests.map((guest, index) => 
      `${index + 1}. ${guest.lastName} ${guest.firstName}`
    );
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