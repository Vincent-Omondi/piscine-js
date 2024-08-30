function pyramid(character, depth) {
    let result = '';

    for (let i = 1; i <= depth; i++) {
        let line = '';

        const numSpaces = (depth - i) * character.length;
        const numChars = 2 * i - 1;

        for (let j = 0; j < numSpaces; j++) {
            line += ' ';
        }

        for (let k = 0; k < numChars; k++) {
            line += character;
        }

        result += line;

        if (i < depth) {
            result += '\n';
        }
    }

    return result;
}

console.log(pyramid('{}', 12));