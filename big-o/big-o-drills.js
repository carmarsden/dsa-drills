// DRILL 11

function towerOfHanoi(pegs, start, buffer, dest) {
    // logic (mostly found this through algorithm explanation)
    // see, for example, https://github.com/Algorithm-archive/Learn-Data_Structure-Algorithm-by-Javascript/tree/master/Others/Tower%20of%20Hanoi 

    // base case: return when there's no tower left
    if (pegs < 1) {
        return
    }

    // move a tower of height - 1 from start, via destination, to the buffer
    towerOfHanoi(pegs - 1, start, dest, buffer);

    // move the remaining disk from start to destination
    console.log(`Move peg #${pegs} from ${start} to ${dest}`);

    // move the tower of height - 1 from the buffer, via the start, to the destination
    towerOfHanoi(pegs - 1, buffer, start, dest)
}

//towerOfHanoi(5, 'A', 'B', 'C')


// DRILL 12.1

function countSheep(input) {
    let output = '';

    for (let i = input; i > 0; i--) {
        output += `${i}: Another sheep jumps over the fence\n`;
    }
    output += 'All sheep jumped over the fence';

    return output;
}

//console.log(countSheep(5))


// DRILL 12.2

function powerCalculator(base, exponent) {
    if (exponent < 0) {
        return 'Exponent should be >= 0'
    } else {
        return base ** exponent;
    }
}

//console.log(powerCalculator(10, 2))


// DRILL 12.3

function reverseString(str) {
    let result = '';

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}

//console.log(reverseString('hello Mother'))


// DRILL 12.4

function triNum(input) {
    let result = 0;
    while (input > 0) {
        result += input;
        input--;
    }

    return result;
}

//console.log(triNum(6));


// DRILL 12.5

// Note: the details of this drill don't actually seem to return an array of the split pieces, based on the input/output provided--this is modeled on the input/output provided where the final output is just a single string but missing the designated separator

function splitString(str, separator) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== separator) {
            result += str[i]
        }
    }

    return result;
}

//console.log(splitString('02/20/2020', '/'));


// DRILL 12.6

function fibonacci(input) {
    if (input === 0 || input === 1) {
        return input;
    }

    // seed values
    let minus2 = 0;
    let minus1 = 1;
    let result;

    for (let i = 2; i <= input; i++) {
        // calculate new result
        result = minus1 + minus2;

        // iterate minus1 & minus2 for the next call
        minus2 = minus1;
        minus1 = result;
    }

    return result;    
}

//console.log(fibonacci(7))


// DRILL 12.7

function factorial(input) {
    let result = input;

    for (let i = input - 1; i > 0; i--) {
        result = result * i;
    }

    return result;
}

console.log(factorial(4));
