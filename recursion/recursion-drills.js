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
// DRILL #6
// DRILL #7
// DRILL #8
// DRILL #9
// DRILL #10
// DRILL #11
// DRILL #12
