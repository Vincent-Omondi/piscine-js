import fs from 'fs/promises';
import path from 'path';

async function tellItCypher(inputFile, action, outputFile) {
  try {
    // Read the input file
    const data = await fs.readFile(inputFile);

    let result;
    let defaultOutputFile;

    if (action === 'encode') {
      // Convert to base64
      result = Buffer.from(data).toString('base64');
      defaultOutputFile = 'cypher.txt';
    } else if (action === 'decode') {
      // Convert from base64
      result = Buffer.from(data.toString(), 'base64').toString('utf-8');
      defaultOutputFile = 'clear.txt';
    } else {
      throw new Error('Invalid action. Use "encode" or "decode".');
    }

    // Determine the output file name
    const finalOutputFile = outputFile || defaultOutputFile;

    // Write the result to the output file
    await fs.writeFile(finalOutputFile, result);

    console.log(`Operation complete. Result saved in ${finalOutputFile}`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Get command line arguments
const [inputFile, action, outputFile] = process.argv.slice(2);

if (!inputFile || !action) {
  console.error('Usage: node tell-it-cypher.mjs <inputFile> <encode|decode> [outputFile]');
} else {
  tellItCypher(inputFile, action, outputFile);
}