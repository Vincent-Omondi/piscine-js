function crosswordSolver(emptyPuzzle, words) {
    function isValidPuzzle(puzzle) {
        return typeof puzzle === 'string' && puzzle.trim() !== '' &&
               /^[0-9.\n]+$/.test(puzzle) && !puzzle.includes('3');
    }

    function isValidWordList(wordList) {
        return Array.isArray(wordList) && wordList.length > 0 &&
               wordList.every(word => typeof word === 'string' && word.length > 0) &&
               new Set(wordList).size === wordList.length;
    }

    if (!isValidPuzzle(emptyPuzzle) || !isValidWordList(words)) {
        console.log('Error: Invalid input');
        return;
    }

    const grid = emptyPuzzle.split('\n').map(row => row.split(''));
    const height = grid.length;
    const width = grid[0].length;

    const wordStarts = [];
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (grid[i][j] !== '.') {
                const acrossLength = getWordLength(i, j, 0, 1);
                const downLength = getWordLength(i, j, 1, 0);
                if (acrossLength > 1 && (j === 0 || grid[i][j-1] === '.')) {
                    wordStarts.push({x: j, y: i, direction: 'across', length: acrossLength});
                }
                if (downLength > 1 && (i === 0 || grid[i-1][j] === '.')) {
                    wordStarts.push({x: j, y: i, direction: 'down', length: downLength});
                }
            }
        }
    }

    if (wordStarts.length !== words.length) {
        console.log('Error: Mismatch between word starts and words');
        return;
    }

    if (solvePuzzle(0)) {
        console.log(grid.map(row => row.join('')).join('\n'));
    } else {
        console.log('Error: No solution found');
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
        if (index === words.length) return true;

        const start = wordStarts[index];
        for (let j = 0; j < words.length; j++) {
            const word = words[j];
            if (word.length === start.length && canPlaceWord(word, start)) {
                placeWord(word, start);
                if (solvePuzzle(index + 1)) return true;
                removeWord(start);
            }
        }

        return false;
    }

    function canPlaceWord(word, start) {
        let {x, y} = start;
        const {direction} = start;
        for (let i = 0; i < word.length; i++) {
            if (y >= height || x >= width || grid[y][x] === '.' || (grid[y][x] !== '0' && grid[y][x] !== '1' && grid[y][x] !== '2' && grid[y][x] !== word[i])) {
                return false;
            }
            if (direction === 'across') x++;
            else y++;
        }
        return true;
    }

    function placeWord(word, start) {
        let {x, y} = start;
        const {direction} = start;
        for (let i = 0; i < word.length; i++) {
            grid[y][x] = word[i];
            if (direction === 'across') x++;
            else y++;
        }
    }

    function removeWord(start) {
        let {x, y} = start;
        const {direction, length} = start;
        for (let i = 0; i < length; i++) {
            if (grid[y][x] !== '1' && grid[y][x] !== '2') {
                grid[y][x] = '0';
            }
            if (direction === 'across') x++;
            else y++;
        }
    }
}

const puzzle = '2001\n0..0\n1000\n0..0'
const words = ['aaab', 'aaac', 'aaad', 'aaae']


crosswordSolver(puzzle, words);