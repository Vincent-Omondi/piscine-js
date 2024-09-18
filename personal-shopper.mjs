#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';

// Helper function to print all available commands
function printHelp() {
  console.log(`
Commands:
- create: takes a filename as the first argument and creates the file
- delete: takes a filename as the first argument and deletes the file
- add: takes a filename as the first argument, an item name as the third argument, and an optional quantity as the fourth argument. Adds the item to the list.
- rm: takes a filename as the first argument, an item name as the third argument, and an optional quantity as the fourth argument. Removes the item or reduces its quantity.
- ls: lists all items in the shopping list
- help: prints this help message
  `);
}

// Helper function to load the shopping list file
async function loadList(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') return {};
    throw error;
  }
}

// Helper function to save the shopping list file
async function saveList(filePath, list) {
  await fs.writeFile(filePath, JSON.stringify(list, null, 2), 'utf8');
}

// Main logic for handling commands
async function main() {
  const [,, file, command, elem, quantityArg] = process.argv;

  if (!file) {
    return printHelp();
  }

  const filePath = path.resolve(file);
  const quantity = isNaN(Number(quantityArg)) ? null : Number(quantityArg);

  try {
    switch (command) {
      case 'create':
        await fs.writeFile(filePath, '{}', 'utf8');
        console.log(`Created file: ${file}`);
        break;

      case 'delete':
        await fs.unlink(filePath);
        console.log(`Deleted file: ${file}`);
        break;

      case 'add': {
        if (!elem) {
          console.error('No elem specified.');
          break;
        }
        const list = await loadList(filePath);
        const currentQuantity = list[elem] || 0;
        const addQuantity = quantity === null ? 1 : quantity;

        list[elem] = currentQuantity + addQuantity;
        if (list[elem] <= 0) {
          delete list[elem];
        }

        await saveList(filePath, list);
        console.log(`Added/updated element: ${elem}`);
        break;
      }

      case 'rm': {
        if (!elem) {
          console.error('No elem specified.');
          break;
        }
        const list = await loadList(filePath);
        if (!list[elem]) break;

        if (quantity === null) {
          delete list[elem];
        } else if (isNaN(quantity)) {
          console.error('Unexpected request: nothing has been removed.');
        } else {
          list[elem] -= quantity;
          if (list[elem] <= 0) {
            delete list[elem];
          }
        }

        await saveList(filePath, list);
        console.log(`Removed/reduced element: ${elem}`);
        break;
      }

      case 'ls': {
        const list = await loadList(filePath);
        if (Object.keys(list).length === 0) {
          console.log('Empty list.');
        } else {
          for (const [item, qty] of Object.entries(list)) {
            console.log(`- ${item} (${qty})`);
          }
        }
        break;
      }

      case 'help':
      default:
        printHelp();
        break;
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
