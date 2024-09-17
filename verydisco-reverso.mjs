#!/usr/bin/env node 

import { readFileSync } from "fs";

function reverseVeryDisco(word) {
    const midpoint = Math.ceil(word.length / 2);
    return word.slice(-midpoint) + word.slice(0, -midpoint);
}

const filename = process.argv[2];

if (!filename) {
    console.error("Please provide a filename as an argument.");
    process.exit(1);
}

try {
    const fileContent = readFileSync(filename, "utf8");
    const decipheredResult = fileContent.split(' ').map(reverseVeryDisco).join(' ');
    console.log(decipheredResult);
} catch (error) {
    console.error("Error reading file:", error);
    process.exit(1);
}