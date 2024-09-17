import fs from 'fs/promises';
import path from 'path';

async function tellMeVip(directoryPath) {
  try {
    // Read all files in the directory
    const files = await fs.readdir(directoryPath);

    // Process each file and extract guest information
    const guests = await Promise.all(
      files.filter(file => file.endsWith('.json')).map(async (file) => {
        const filePath = path.join(directoryPath, file);
        const content = await fs.readFile(filePath, 'utf-8');
        const guestInfo = JSON.parse(content);
        const [firstName, lastName] = file.replace('.json', '').split('_');
        return { firstName, lastName, response: guestInfo.answer };
      })
    );

    // Filter VIP guests (those who answered 'yes', case-insensitive)
    const vipGuests = guests.filter(guest => guest.response.toLowerCase() === 'yes');

    // Sort VIP guests alphabetically by last name, then first name
    vipGuests.sort((a, b) => {
      const lastNameComparison = a.lastName.localeCompare(b.lastName);
      if (lastNameComparison === 0) {
        return a.firstName.localeCompare(b.firstName);
      }
      return lastNameComparison;
    });

    // Format VIP guest list
    const vipList = vipGuests.map((guest, index) => 
      `${index + 1}. ${guest.lastName} ${guest.firstName}`
    );

    // Save VIP list to vip.txt
    await fs.writeFile('vip.txt', vipList.join('\n'));

    console.log('VIP list has been saved to vip.txt');

    // Return the VIP list
    return vipList;
  } catch (error) {
    console.error('Error:', error.message);
    return [];
  }
}

const directoryPath = process.argv[2];

if (!directoryPath) {
  console.error('Please provide a directory path as an argument.');
} else {
  tellMeVip(directoryPath).then((vipList) => {
    console.log('VIP Guests:');
    vipList.forEach((guest) => console.log(guest));
  });
}