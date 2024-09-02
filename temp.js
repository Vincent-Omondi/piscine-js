function permutate(arr, cross) {
    if (stop) return;

    if (arr.length == 0) {
        if (print == 'Error') {
            print = cross.map(array => array.join('')).join('\n');
        } else {
            stop = true;
            print = 'Error';
        }
        return;
    }

    let level = initiallength - arr.length;

    for (let i = 0; i < arr.length; i++) {
        let copy = copyArr(arr);
        let parent = copy.splice(i, 1);
        let crosswordCopy = copyArr(cross);

        if (isMatching(level, parent[0], crosswordCopy)) {
            var result = placeWord(level, parent[0], crosswordCopy);
            permutate(copy, result);
        }
    }
}

function isMatching(index, word, arr) {
    const localIndices = indesies[index];

    if (word.length !== localIndices.length) return false;

    for (let i = 0; i < localIndices.length; i++) {
        const { row, col } = localIndices[i];
        const chInCrossword = arr[row][col];

        if (chInCrossword === '') continue;
        if (chInCrossword !== word[i]) return false;
    }

    return true;
}

function placeWord(index, word, crossword) {
    const localIndices = indesies[index];
    
    for (let i = 0; i < localIndices.length; i++) {
        const { row, col } = localIndices[i];
        crossword[row][col] = word[i];
    }
  
    return crossword;
}

const createCrossword = (str) => {
    str = str.trim();
    if (str == '') return 'Error';

    let result = [];
    let rows = str.split('\n');
    for (let row of rows) {
        let colF = row.split('').map(ch => (ch == '0' || ch == '1') ? '' : (ch == '.' || ch == '2') ? ch : null);
        if (colF.includes(null)) return 'Error';
        result.push(colF);
    }

    for (let row = 0; row < result.length; row++) {
        for (let col = 0; col < result[row].length; col++) {
            if (result[row][col] == '2') {
                if ((col == 0 || result[row][col - 1] == '.') &&
                    (row == 0 || result[row - 1][col] == '.') &&
                    col + 1 < result[0].length &&
                    result[row][col + 1] != '.' &&
                    row + 1 < result.length &&
                    result[row + 1][col] != '.') {
                    result[row][col] = '';
                } else {
                    return "Error";
                }
            }
        }
    }
    return result;
}

const createIndecies = (arr) => {
    let result = [];

    // Horizontal
    for (let row = 0; row < arr.length; row++) {
        let ind = [];
        for (let col = 0; col < arr[row].length; col++) {
            if (arr[row][col] == '') {
                ind.push({ row, col });
            } else if (ind.length > 1) {
                result.push([...ind]);
                ind = [];
            } else {
                ind = [];
            }
        }
        if (ind.length > 1) result.push([...ind]);
    }

    // Vertical
    for (let col = 0; col < arr[0].length; col++) {
        let ind = [];
        for (let row = 0; row < arr.length; row++) {
            if (arr[row][col] == '') {
                ind.push({ row, col });
            } else if (ind.length > 1) {
                result.push([...ind]);
                ind = [];
            } else {
                ind = [];
            }
        }
        if (ind.length > 1) result.push([...ind]);
    }

    return result;
}

const crosswordSolver = (puzzle, words) => {
    if (typeof puzzle != "string" || !Array.isArray(words) || words.some(word => typeof word != "string")) {
        console.log("Error");
        return;
    }

    initiallength = words.length;
    let crossword = createCrossword(puzzle);
    if (crossword === 'Error') {
        console.log("Error");
        return;
    }
    indesies = createIndecies(crossword);
    permutate(words, crossword)
    console.log(print);
}

let stop = false;
let initiallength;
let indesies;
var print = "Error";

const copyArr = (arr) => JSON.parse(JSON.stringify(arr));

module.exports = {
    crosswordSolver,
    createCrossword,
    createIndecies,
    isMatching,
    placeWord,
    permutate,
    copyArr
};

const puzzle = '2001\n0..0\n1000\n0..0'
const words = ['aaab', 'aaac', 'aaad', 'aaae']

crosswordSolver(puzzle, words)
