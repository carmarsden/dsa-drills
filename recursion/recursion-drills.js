// DRILL #1

function countSheep(input) {
    // Base case
    if (input <= 0) {
        return 'All sheep jumped over the fence'
    }
  
    // General case
    return `${input}: Another sheep jumps over the fence  ` + countSheep(input-1)
}


// DRILL #2

function powerCalculator(base, exponent) {
    // 2 base cases
    if (exponent < 0) {
        return 'Exponent should be >= 0'
    }

    if (exponent === 0) {
        return base
    }

    // General case
    return base * powerCalculator(base, exponent - 1)
}


// DRILL #3

function reverseString(inputStr) {
    // Base case
    if (inputStr.length === 1) {
        return inputStr
    }

    // General case
    return inputStr.slice(-1) + reverseString(inputStr.slice(0, -1))
}


// DRILL #4

function triNum(input) {
    if (input <= 0) {
        return 0
    }

    return input + triNum(input-1)
}


// DRILL #5

// Note: the details of this drill don't actually seem to return an array of the split pieces, based on the input/output provided--this is modeled on the input/output provided where the final output is just a single string but missing the designated separator

function splitString(str, separator) {
    // Base case #1: if we've encountered the separator, don't add it before calling fn on rest of the string
    if (str[0] === separator) {
        return splitString(str.slice(1), separator);
    }

    // Base case #2: if you're at the end of the string, return it
    if (str.length <= 1) {
        return str;
    }

    // Otherwise: return the first character and call fn on rest of the string
    return str[0] + splitString(str.slice(1), separator)
}

//console.log(splitString('02/20/2020', ' '));


// DRILL #6

function fibonacci(input) {
    if (input === 1 || input === 0) {
      return input;
    }
  
    return fibonacci(input - 1) + fibonacci(input - 2)    
}


// DRILL #7

// Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.


function factorial(input) {
    if (input <= 1) {
        return 1
    }

    return input * factorial(input - 1)
}

//console.log(factorial(5));


// DRILL #8

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let myBigMaze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function oneExit(maze, row = 0, col = 0, path = '') {
    const maxRow = maze.length - 1;
    const maxCol = maze[0].length - 1;

    // base case 1: we've hit a wall, a blocked passage, or a visited spot
    if (row < 0 || row > maxRow || col < 0 || col > maxCol || maze[row][col] === '*' || maze[row][col] === 'v') {
        console.log(`We hit a barrier at: ${path}`)
        return;
    }

    // base case 2: we made it to the exit!
    if (maze[row][col] === 'e') {
        console.log('current maze: ')
        console.log(maze)
            console.log(`Path to the exit: ${path}`)
            return path;
        }
        
    // otherwise, mark this space as visited...
    maze[row][col] = 'v';
    
    // ...then traverse the rest of the maze!
    // prioritize moving right and down
    // return whichever path gets you there
    return oneExit(maze, row + 1, col, path + 'D')
        || oneExit(maze, row, col + 1, path + 'R')
        || oneExit(maze, row - 1, col, path + 'U')
        || oneExit(maze, row, col - 1, path + 'L')
    ;
}

// oneExit(maze);


// DRILL #9

/*
Notice that this maze has 3 exits. Your recursive function should print all three of the paths with the proper directions. For example, given the maze above, the program should output the following:

Path to the exit: RRDDLLDDRRRRRR
Path to the exit: RRDDRRUURRDDDD
Path to the exit: RRDDRRRRDD

*/

function allExits(maze, row = 0, col = 0, path = '') {
    const maxRow = maze.length - 1;
    const maxCol = maze[0].length - 1;
    
    console.log(maze)

    // base case 1: we've hit a wall, a blocked passage, or a visited spot
    if (row < 0 || row > maxRow || col < 0 || col > maxCol || maze[row][col] === '*' || maze[row][col] === 'v') {
        console.log(`We hit a barrier at: ${path}`)
        return;
    }

    // base case 2: we made it to the exit!
    if (maze[row][col] === 'e') {
        console.log(`Path to the exit: ${path}`)
        return path;
    }
        
    // otherwise, make a new 'map' of the maze and mark this space as visited...
    const newMap = maze.slice();
    newMap[row][col] = 'v';
    
    // ...then traverse the rest of the maze! try moving up, left, down, or right
    // to make this search... return current path + allExits of the rest, in allExits do the movement, then do the check, in base case only return the latest direction???
    allExits(newMap, row - 1, col, path + 'U')
    allExits(newMap, row + 1, col, path + 'D')
    allExits(newMap, row, col - 1, path + 'L')
    allExits(newMap, row, col + 1, path + 'R');
}

allExits(myBigMaze);



// DRILL #10

function anagramList(str) {
    // base case: with only one letter, return it as an array (this fn will always return an array of string(s))
    if (str.length <= 1) {
        return [str]
    }

    const results = [];
    
    // for each letter in the string
    // use letter as a prefix, and then find all anagrams of remaining letters
    for (let i = 0; i < str.length; i++) {
        const prefix = str[i];
        const remainingLetters = str.slice(0, i) + str.slice(i + 1);
        const permutations = anagramList(remainingLetters);

        // for each anagram of remaining letters, append the prefix and push it into the total array
        permutations.forEach(perm => {
            results.push(prefix + perm)
        })
    }

    return results;
}

// console.log(anagramList('east'))


// DRILL #11

const orgInput = {
    'Zuckerberg': {
        'Schroepfer': {
            'Bosworth': [
                'Steve',
                'Kyle',
                'Andra'
            ],
            'Zhao': [
                'Richie',
                'Sofia',
                'Jen'
            ]
        },
        'Schrage': {
            'VanDyck': [
                'Sabrina',
                'Michelle',
                'Josh'
            ],
            'Swain': [
                'Blanch',
                'Tom',
                'Joe'
            ]
        },
        'Sandberg': {
            'Goler': [
                'Eddie',
                'Julie',
                'Annie'
            ],
            'Hernandez': [
                'Rowi',
                'Inga',
                'Morgan'
            ],
            'Moissinac': [
                'Amy',
                'Chuck',
                'Vinni',
            ],
            'Kelley': [
                'Eric',
                'Ana',
                'Wes'   
            ]
        }
    }
}

function orgChart(input, layer = 0) {
    const indent = '    ';

    // edge case: input wasn't an object
    if (typeof(input) !== 'object') {
        throw new Error('orgChart input must be an object/array')
    }

    // base case: input is an array (terminal layer of org chart), so print each item and return
    if (Array.isArray(input)) {
        input.forEach(name => {
            console.log(indent.repeat(layer) + name);
        })
        return;
    }    

    // general case: your input is an object, so print each key, and then print the orgCharts of their values
    if (typeof(input) === 'object') {
        const keys = Object.keys(input);
        keys.forEach(key => {
            console.log(indent.repeat(layer) + key);
            orgChart(input[key], layer + 1);
        })
    }
}

// orgChart(orgInput);


// DRILL #12

function binary(num, exp) {
    // if exponent isn't provided, use the highest power of the input
    exp = exp || Math.floor(Math.log2(num))

    // edge cases: based on exp calculation, we were given zero (log2 = -Infinity) or a negative number (log2 = NaN)
    if (exp == -Infinity) {
        return '0'
    }
    if (Number.isNaN(exp)) {
        throw new Error('Input must be positive')
    }

    // base case: we are past the 'ones' place (2^0)
    if (exp < 0) {
        return '';
    }

    // find the next numeral (0 or 1) in the binary string
    let nextNumeral;
    let nextSearch = num;
    if (num >= (2 ** exp)) {
        nextNumeral = '1';
        nextSearch = num - (2 ** exp);
    } else {
        nextNumeral = '0';
    }

    return nextNumeral + binary(nextSearch, exp - 1)    
}

/*
console.log('25: ', binary(25))
console.log('3: ', binary(3))
console.log('2: ', binary(2))
console.log('1: ', binary(1))
console.log('0: ', binary(0))
*/