#!/usr/bin/env node 

function makeVeryDisco(word) {
    const midpoint = Math.ceil(word.length / 2);
    return word.slice(midpoint) + word.slice(0, midpoint)
}

const input = process.argv[2];

if (!input) {
    console.error('Please provide a word as an argument.');
    process.exit(1);
}

const veryDiscoResult = input.split(' ').map(makeVeryDisco).join(' ');

console.log(veryDiscoResult)
