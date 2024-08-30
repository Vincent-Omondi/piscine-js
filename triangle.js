function triangle(character, height) {
    let result = '';

    for (let i = 1; i <= height; i++) {
        let line = '';
        
        for (let j = 0; j < i; j++) {
            line += character;
        }
        
        result += line;

        if (i < height) {
            result += '\n';
        }
    }

    return result;
}

// console.log(triangle('#', 4));

