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

/*  Write a recursive function that split a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

Input: 02/20/2020
Output: 02202020
*/

function splitString(inputStr) {

}



// DRILL #6

// Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.


function fibonacci(input) {
    
}


// DRILL #7

function factorial(input) {
    if (input === 1) {
        return 1
    }

    return input * factorial(input - 1)
}


// DRILL #8
// DRILL #9
// DRILL #10

// An anagram is any word or phrase that uses the letters of a given ("subject") word or phrase in another, rearranged order. Write a function that creates an anagram list, listing all the rearrangements of a given word. For example, if the user types "east", the program should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".

// Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. For example, given "east", use "e" as a prefix and place it in front of all 6 permutations of "ast" — "ast", "ats", "sat", "sta", "tas", and "tsa". This will give you the words "east", "eats", "esat", "esta", "etas", and "etsa". Continue this way until you find all the anagrams for "east". Then you can use "a" as a prefix and permute the remaining words "est". For "east", there should be 24 words.

function anagramList(subject) {
    

}

// DRILL #11
// DRILL #12
