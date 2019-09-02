## 1. Implement an Array class from scratch.
Walk through each step of implementing an array. Don't rush through this by copying and pasting the code samples. After you've walked through it and you understand the code of the Array class, hide the sample code and try writing the Array class from scratch using the memory module here for allocating memory.

Be sure to export the memory module and then import it using require.

**See array.js file**

## 2. Explore the push() method
Using the Array class you just created above, add an item to the array. Use the following function:

```
function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);

    console.log(arr);
}
```

* What is the length, capacity and memory address of your array?
    * Length = 1
    * Capacity = 3
    * Memory address = 0

Add the following in the main function and then print the array:

```
    ...
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
```

* What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code.
    * Length = 6 --> we pushed 6 items overall
    * Capacity = 12 --> initial capacity 3. push items 1, 2, 3 without issue. When we push item 4, it needs to resize which sets length to 4 and new capacity (based on size ratio 3) to 12. Pushing items 5 & 6 no longer need a capacity resize as we have space.
    * Memory address = 3 --> this is the new "head" / start of our array in memory, because the old array had a length of 3 (it took up indexes 0-2) and then it needed to be resized, so upon resizing the old array with length 3 was copied over to a new array of length 12 starting at the next available memory address (3)

## 3. Exploring the pop() method
Add the following in the main function and then print the array:

```
  ...
  arr.pop();
  arr.pop();
  arr.pop();
```

What is the length, capacity, and address of your array? Explain the result of your program after adding the new lines of code.
* Length = 3 --> we originally added 6 items and then removed the final 3, so total length is 3
* Capacity = 12 --> same as drill 2, and popping items does not force us to resize at all (we leave the memory open)
* Memory address = 3 --> same as drill 2

# 4. Understanding more about how arrays work
* Print the 1st item in the array arr.
    * `console.log(arr.get(0));` = 3
* Empty the array and add just 1 item: arr.push("tauhida");
* Print this 1 item that you just added. What is the result? Can you explain your result?
    * `console.log(arr.get(0));` = NaN
    * The situation works fine when pushing a number instead of a string
    * This seems to be because our memory structure is a Float64Array, which takes only float number values and can't store strings.
* What is the purpose of the _resize() function in your Array class?
    * To allocate more contiguous memory to the array when you try to add items for which there are no more contiguous memory blocks


----------------

*NOTE: You can use JavaScript's built-in arrays to solve the following drills. After you write the algorithm, identify its time complexity and determine if it needs to be optimized. Start each problem by understanding the problem and coming up with some sample input and output. For your convenience, a few sample input and output are provided.*

----------------

# 5. URLify a string
A common mistake users make when they type in an URL is to put spaces between words or letters. A solution that developers can use to solve this problem is to replace any spaces with a %20. Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be

* Input: tauhida parveen
* Output: tauhida%20parveen
* Input: www.thinkful.com /tauh ida parv een
* Output: www.thinkful.com%20/tauh%20ida%20parv%20een

**Time complexity:** O(n) (as it only makes one pass through the string)

# 6. Filtering an array
Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.

**Time complexity:** O(n) (as it only makes one pass through the array)

# 7. Max sum in the array
You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

* Input: [4, 6, -3, 5, -2, 1]
* Output: 12

**Time complexity:** O(n^2) (as it has two nested loops: for each pass through the array it needs to do another nearly-full pass)

# 8. Merge arrays
Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

* Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
* Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

**Time complexity:** O(n) (as it is only iterating through each array once, so really more like '2n' but we ignore constant factors)

# 9. Remove characters
Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

* Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
* Output: 'Bttl f th Vwls: Hw vs. Grzny'

**Time complexity:** O(n) (as it is only iterating through the string once, though I'm not 100% sure on the time complexity of JavaScript's String.prototype.includes() method I used...)

# 10. Products
Given an array of numbers, write an algorithm to find out the products of every other number except the number at each index.

* Input:[1, 3, 9, 4]
* Output:[108, 36, 12, 27]

**Time complexity:** O(n) (as it is iterating through the array twice, so really more like '2n' but we ignore constant factors)

# 11. 2D array
Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.

```
Input:
[[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];

Output:
[[0,0,0,0,0],
[0,0,0,0,0],
[0,0,1,1,0],
[0,0,0,0,0],
[0,0,1,1,0]];
```

**Time complexity:** O(n^2) (as it first has a nested loop to fill the sets, then another loop through the array to fill columns, so more like n^2 + n, but we only look at the greatest degree)

# 12. String rotation
Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.

* Input: amazon, azonma
* Output: False
* Input: amazon, azonam
* Output: true