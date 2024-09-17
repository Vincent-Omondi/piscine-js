#!/usr/bin/env node 

import { writeFileSync } from 'fs';

function makeVeryDisco(word) {
    const midpoint = Math.ceil(word.length / 2);
    return word.slice(midpoint) + word.slice(0, midpoint);
}

const input = process.argv[2];

if (!input) {
    console.error('Please provide a word as an argument.');
    process.exit(1);
}

const veryDiscoResult = input.split(' ').map(makeVeryDisco).join(' ');

try {
    writeFileSync('verydisco-forever.txt', veryDiscoResult);
    console.log('Result written to verydisco-forever.txt');
} catch (error) {
    console.error('Error writing to file:', error);
    process.exit(1);
}
