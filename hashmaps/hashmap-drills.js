const HashMap = require('./hashmap');
const HashMap2 = require('./hashmap2');

// DRILL 1

function main() {
    HashMap.MAX_LOAD_RATIO = 0.5;
    HashMap.SIZE_RATIO = 3;
    const lor = new HashMap();

    lor.set('Hobbit', 'Bilbo');
    lor.set('Hobbit', 'Frodo');
    lor.set('Wizard', 'Gandalf');
    lor.set('Human', 'Aragorn');
    lor.set('Elf', 'Legolas');
    lor.set('Maiar', 'The Necromancer');
    lor.set('Maiar', 'Sauron');
    lor.set('RingBearer', 'Gollum');
    lor.set('LadyOfLight', 'Galadriel');
    lor.set('HalfElven', 'Arwen');
    lor.set('Ent', 'Treebeard');

    console.log(lor);
    console.log('Hobbit value: ', lor.get('Hobbit'));
    console.log('Maiar value: ', lor.get('Maiar'));

    return lor;
}

//console.log(main())


// DRILL 4

function dedupe(str) {
    // using a hash map: as you go through the loop, store the character in hash map
    // if you encounter it again, don't push it back to string
    
    HashMap.MAX_LOAD_RATIO = 0.75;
    HashMap.SIZE_RATIO = 3;

    let result = '';
    const strHash = new HashMap();

    for (i = 0; i < str.length; i++) {
        // if we can't get the character from hash map, this means it's new
        // add it to hash map as now encountered, and push it to the string
        if (strHash.get(str[i]) === undefined) {
            strHash.set(str[i], 'encountered');
            result += str[i];
        }
    }

    return result;
}


// DRILL 5

function canPalindrome(str) {
    // like dedupe: as you loop through the str, store the character in hash map with # of times encountered
    // count the number of odd-numbered encountered values (characters without a pair)
    // at the end, you can only have 0 or 1 odd-numbered encountered values for a palindrome

    HashMap.MAX_LOAD_RATIO = 0.75;
    HashMap.SIZE_RATIO = 3;

    // clean up string: all lower case, only care about the letters & numbers
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let unpaired = 0;
    const strHash = new HashMap();

    for (i = 0; i < str.length; i++) {
        // if we can't get the character from hash map, this means it's new: add to map with encounter count 1, incremenet unpaired counter
        if (strHash.get(str[i]) === undefined) {
            strHash.set(str[i], 1);
            unpaired++;
        } else {
            // otherwise: increment value
            // if new value is even, decrement unpaired counter, otherwise increment unpaired counter
            const newVal = strHash.get(str[i]) + 1;
            strHash.set(str[i], newVal);
            if (newVal % 2 === 0) {
                unpaired--;
            } else {
                unpaired++;
            }
        }

        console.log('str, new unpaired counter: ', str[i], unpaired)
    }

    return (unpaired === 0 || unpaired === 1);
}


// DRILL 6

function anagrams(arr) {
    // like dedupe & canPalindrome above, we will create a hash for each word with # of times encountered
    // stringify the hashmap and compare to prior hashmaps
    // if it exists, push it to that array
    // if it doesn't exist, create a new array and push it there

    HashMap.MAX_LOAD_RATIO = 0.75;
    HashMap.SIZE_RATIO = 3;

    // establish results array & an object to use as a 'key' (keys = stringified hash maps, values = index in results array for that mapping)
    const results = [];
    const resultKey = {};

    arr.forEach(str => {
        // clean up string: all lower case, only care about the letters & numbers
        str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

        // hash each letter of the string with number of times found
        const strHash = new HashMap();
        for (i = 0; i < str.length; i++) {
            if (strHash.get(str[i]) === undefined) {
                strHash.set(str[i], 1);
            } else {
                const increment = strHash.get(str[i]) + 1;
                strHash.set(str[i], increment)
            }
        }

        const stringified = JSON.stringify(strHash._hashTable);

        // if this string already exists in resultKey, push the string to that index in the results array
        if (resultKey.hasOwnProperty(stringified)) {
            const idx = resultKey[stringified];
            results[idx].push(str)
        } else {
            // otherwise, add the string to the resultKey with the next open index of the results array
            // and push onto results array a new array containing that string
            resultKey[stringified] = results.length;
            results.push([str])
        }
    })

    return (results);
}

// console.log(anagrams(['east', 'elloh', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race', 'hello']))


// DRILL 7

function drill7() {
    HashMap2.MAX_LOAD_RATIO = 0.5;
    HashMap2.SIZE_RATIO = 3;
    const lor = new HashMap2();

    lor.set('Hobbit', 'Bilbo');
    lor.set('Hobbit', 'Frodo');
    lor.set('Wizard', 'Gandalf');
    lor.set('Human', 'Aragorn');
    lor.set('Elf', 'Legolas');
    lor.set('Maiar', 'The Necromancer');
    lor.set('Maiar', 'Sauron');
    lor.set('RingBearer', 'Gollum');
    lor.set('LadyOfLight', 'Galadriel');
    lor.set('HalfElven', 'Arwen');
    lor.set('Ent', 'Treebeard');

    return lor;
}


console.log(drill7().get('Maiar'));