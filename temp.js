function crosswordSolver(emptyPuzzle, words) {
    // Input validation
    if (typeof emptyPuzzle !== 'string' || !/^[0-9.\n]+$/.test(emptyPuzzle)) {
        console.log('Error');
        return;
    }

    if (!Array.isArray(words) || words.length === 0 || new Set(words).size !== words.length) {
        console.log('Error');
        return;
    }

    const grid = emptyPuzzle.split('\n').map(row => row.split(''));
    const height = grid.length;
    const width = grid[0].length;

    const wordStarts = [];
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (grid[i][j] !== '.' && grid[i][j] !== '0') {
                const num = parseInt(grid[i][j]);
                if (num > 2) {
                    console.log('Error');
                    return;
                }
                const acrossLength = getWordLength(i, j, 0, 1);
                const downLength = getWordLength(i, j, 1, 0);
                if (acrossLength > 1) {
                    wordStarts.push({x: j, y: i, direction: 'across', length: acrossLength});
                }
                if (downLength > 1) {
                    wordStarts.push({x: j, y: i, direction: 'down', length: downLength});
                }
            }
        }
    }

    if (wordStarts.length !== words.length) {
        console.log('Error');
        return;
    }

    const maxLength = Math.max(...wordStarts.map(start => start.length));
    if (words.some(word => word.length > maxLength)) {
        console.log('Error');
        return;
    }

    if (solvePuzzle(0)) {
        console.log(grid.map(row => row.join('')).join('\n'));
    } else {
        console.log('Error');
    }

    function getWordLength(y, x, dy, dx) {
        let length = 0;
        while (y < height && x < width && grid[y][x] !== '.') {
            length++;
            y += dy;
            x += dx;
        }
        return length;
    }

    function solvePuzzle(index) {
        if (index === words.length) {
            return true;
        }

        const start = wordStarts[index];
        for (let word of words) {
            if (word.length === start.length && canPlaceWord(word, start)) {
                placeWord(word, start);
                if (solvePuzzle(index + 1)) {
                    return true;
                }
                removeWord(start);
            }
        }

        return false;
    }

    function canPlaceWord(word, start) {
        let {x, y} = start;
        const {direction} = start;
        for (let i = 0; i < word.length; i++) {
            if (grid[y][x] !== '.' && grid[y][x] !== word[i] && !/[0-9]/.test(grid[y][x])) {
                return false;
            }
            direction === 'across' ? x++ : y++;
        }
        return true;
    }

    function placeWord(word, start) {
        let {x, y} = start;
        const {direction} = start;
        for (let i = 0; i < word.length; i++) {
            grid[y][x] = word[i];
            direction === 'across' ? x++ : y++;
        }
    }

    function removeWord(start) {
        let {x, y} = start;
        const {direction, length} = start;
        for (let i = 0; i < length; i++) {
            grid[y][x] = /[0-9]/.test(grid[y][x]) ? grid[y][x] : '.';
            direction === 'across' ? x++ : y++;
        }
    }
}


// Test the function
const puzzle = '2001\n0..0\n1000\n0..0';
const words = ['casa', 'alan', 'ciao', 'anta'];

crosswordSolver(puzzle, words);