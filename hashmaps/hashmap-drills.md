## 1. Create a HashMap class
Walk through the HashMap implementation in the curriculum and understand it well. Then write a HashMap class and its core functions with open addressing as the collision resolution mechanism.

* Create a .js file called HashMaps_drills. In the file import the HashMap module. Create a function called main()
* Inside your main() function, create a hash map called `lor`.
* For your hash map that you have created, set the MAX_LOAD_RATIO = 0.5 and SIZE_RATIO = 3.
* Add the following items to your hash map: {"Hobbit": "Bilbo"}, {"Hobbit": "Frodo"}, {"Wizard": "Gandolf"}, {"Human": "Aragon"}, {"Elf": "Legolas"}, {"Maiar": "The Necromancer"}, {"Maiar": "Sauron"}, {"RingBearer": "Gollum"}, {"LadyOfLight": "Galadriel"}, {"HalfElven": "Arwen"}, {"Ent": "Treebeard"}
* Print your hash map and notice the length and items that are hashed in your hash map. Have you hashed all the items you were asked to?
    * Length = 9
    * Items:
    ```
    [ <2 empty items>,
     { key: 'HalfElven', value: 'Arwen', DELETED: false },
     <1 empty item>,
     { key: 'LadyOfLight', value: 'Galadriel', DELETED: false },
     <1 empty item>,
     { key: 'Wizard', value: 'Gandalf', DELETED: false },
     { key: 'RingBearer', value: 'Gollum', DELETED: false },
     <4 empty items>,
     { key: 'Elf', value: 'Legolas', DELETED: false },
     { key: 'Hobbit', value: 'Frodo', DELETED: false },
     <6 empty items>,
     { key: 'Ent', value: 'Treebeard', DELETED: false },
     <1 empty item>,
     { key: 'Human', value: 'Aragorn', DELETED: false },
     { key: 'Maiar', value: 'Sauron', DELETED: false } ],
    ```
    * This is missing: Hobbit/Bilbo, Maiar/The Necromancer --> both of which were duplicate keys, and it seems the second addition overwrote the data that was stored in the value for that key
* Retrieve the value that is hashed in the key "Maiar" and "Hobbit". What are the values of Maiar and Hobbit that you have? Is there a discrepancy? Explain your answer.
    * Hobbit = Frodo; Maiar = Sauron. See explanation above.
* What is the capacity of your hash table after you have hashed all the above items? Explain your answer.
    * Capacity = 24: size ratio for hash map is 3, initial capacity was set to 8, max load ratio was 0.5
    * When we tried to add item # 5 (of 8), we would have resized to capacity * size ratio = 24
    * We would resize again when we tried to add item # 13 (of 24), which didn't happen

## 2. WhatDoesThisDo
DO NOT run the following code before solving the problem.

What is the output of the following code? explain your answer.

```
const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}
```

* As seen above, when you try to add a new value to the same key, it overwrites the previous key. Therefore in map1 it will hash 10 and then overwrite with 20. In map2 it will hash 20 then overwrite with 10.
* Console log output should be: 20, 10

## 3. Demonstrate understanding of Hash maps
*You don't need to write code for the following two drills. Use any drawing app or simple pen and paper*

1) Show your hash map after the insertion of keys 10, 22, 31, 4, 15, 28, 17, 88, 59 into a hash map of length m = 11 using open addressing and a hash function k mod m.

| Key           | 10 | 22 | 31 | 4 | 15 | 28 | 17 | 88 | 59 |
|---------------|----|----|----|---|----|----|----|----|----|
| Hash (k % 11) | 10 | 0  | 9  | 4 | 4  | 6  | 6  | 0  | 4  |

*Assuming load ratio & size leaves this in fine shape to maintain hashmap capacity of 11*

| HashMap Index | Key |
|---------------|-----|
| 0             | 22  |
| 1             | 88  |
| 2             | *empty* |
| 3             | *empty* |
| 4             | 4   |
| 5             | 15  |
| 6             | 28  |
| 7             | 17  |
| 8             | 59  |
| 9             | 31  |
| 10            | 10  |

2) Show your hash map after the insertion of the keys 5, 28, 19, 15, 20, 33, 12, 17, 10 into the hash map with collisions resolved by separate chaining. Let the hash table have a length m = 9, and let the hash function be k mod m.

| Key          | 5 | 28 | 19 | 15 | 20 | 33 | 12 | 17 | 10 |
|--------------|---|----|----|----|----|----|----|----|----|
| Hash (k % 9) | 5 | 1  | 1  | 6  | 2  | 6  | 3  | 8  | 1  |

*Assuming load ratio & size leaves this in fine shape to maintain hashmap capacity of 9*

| HashMap Index | Key                |
|---------------|--------------------|
| 0             | *empty*            |
| 1             | LL: 28 -> 19 -> 10 |
| 2             | 20                 |
| 3             | 12                 |
| 4             | *empty*            |
| 5             | 5                  |
| 6             | LL: 15 -> 33       |
| 7             | *empty*            |
| 8             | 17                 |

## 4. Remove duplicates
Implement a function to delete all duplicated characters in a string and keep only the first occurrence of each character. For example, if the input is string “google”, the result after deletion is “gole”. Test your program with a sentence as well such as "google all that you think can think of".

**See hashmap-drills.js: dedupe**

## 5. Any permutation a palindrome
Write an algorithm to check whether any permutation of a string is a palindrome. Given the string "acecarr", the algorithm should return true, because the letters in "acecarr" can be rearranged to "racecar", which is a palindrome. In contrast, given the word "north", the algorithm should return false, because there's no way to rearrange those letters to be a palindrome.

**See hashmap-drills.js: canPalindrome**

## 6. Anagram grouping
Write an algorithm to group a list of words into anagrams. For example, if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'], the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].

**See hashmap-drills.js: anagrams**

## 7. Separate Chaining
Write another hash map implementation as above, but use separate chaining as the collision resolution mechanism.

Test your hash map with the same values from the lor hash map.

**See hashmap2.js & hashmap-drills.js: drill7**