/*
Given a list of integers find the mode and the frequency of the mode. The mode in a list of numbers is the value that occurs the most often. If no number in the list is repeated, then there is no mode for the list.
- Input: `1, 2, 3, 6, 10, 3, 5, 6, 3, 3`
- Output: `Mode = 3, Frequency of mode = 4`
*/

function findMode(arr) {
    // create an object: each integer found is a key, value is the # of occurrences
    // after tallying up occurrences, look in object values for the highest value
    // if it's >1, return that key & value
    // otherwise return undefined

    const results = {};

    arr.forEach(int => {
        if (results.hasOwnProperty(int)) {
            results[int]++;
        } else {
            results[int] = 1;
        }
    })

    let mode = undefined;
    let frequency = 0;

    for (const item in results) {
        if (results[item] > frequency) {
            mode = item;
            frequency = results[item];
        }
    }

    if (mode === undefined || frequency <= 1) {
        return undefined
    } else {
        return `Mode = ${mode}, Frequency of mode = ${frequency}`
    }
}

const modeArr = [1, 2, 3, 6, 10, 3, 5, 6, 3, 3];
const modeArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//console.log(findMode(modeArr));


/*
Given a string, write an algorithm to count the number of words in the string that are palindromes. The output must include a list of the palindromes and the number of palindromes.
 - Input: `"Dad gave mom a Tesla as a racecar"`
 - Output: `Dad, mom, racecar, 3 Palindromes`
*/

function isPalindrome(str) {
    str = str.toLowerCase();

    if (str.length <= 1) {
        return false;
    }

    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

function countPalindromes(str) {
    const words = str.split(' ');
    let output = '';
    let counter = 0;
    words.forEach(word => {
        if (isPalindrome(word)) {
            output += `${word}, `;
            counter++;
        }
    })

    output += `${counter} Palindromes`;
    return output;
}

console.log(countPalindromes('Dad gave mom a Tesla as a racecar'));