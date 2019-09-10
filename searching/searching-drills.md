## 1. How many searches?
* Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 8.
    * 1: start = 0, end = 10, index = 5 ==> finds 12
    * 2: start = 0, end = 4, index = 2 ==> finds 6
    * 3: start = 3, end = 4, index = 3 ==> **finds 8**

* Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 16.
    * 1: start = 0, end = 10, index = 5 ==> finds 12
    * 2: start = 6, end = 10, index = 8 ==> finds 17
    * 3: start = 6, end = 7, index = 6 ==> finds 14
    * 4: start = 7, end = 7, index = 7 ==> finds 15
    * 5: start = 8, end = 7 ==> **return -1, item not found**

## 2. Adding a React UI
For exercises 1 and 2, you will be using a search algorithm to search for an item in a dataset. You will be testing the efficiency of 2 search algorithms, linear search and binary search. You will also have a UI (a simple textbox will do) through which you will be sending your input that you want to search. There is no server-side to this program. All of this should be done using React.

1) Linear search

Given the following dataset, find out how many tries it took to search for a particular item in the dataset. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.

`89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5`

2) Binary search

Use the same front end and the dataset from the previous exercise for this exercise. Use array.sort to sort the dataset. Then implement a binary search to find a particular value in the dataset. Display how many tries it took to search for a particular item in the dataset using binary search. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.

## 3. Find a book
Imagine you are looking for a book in a library with a Dewey Decimal index. How would you go about it? Can you express this process as a search algorithm? Implement your algorithm to find a book whose Dewey and book title is provided.

**Analysis:** The range of possible Dewey Decimal numbers is known: 000 - 999 (as floats, not integers). We also know that a well-stocked library will have a very even distribution of data points (books) across the range. Given the desired number I would start at the end, beginning, or middle of the stacks if it's 000-350, 350-700, or 700-999 respectively (ish). Once at my desired general section I would walk (iterate) through the stacks until I get to the stack that has my number, and then go into that stack. Searching within the stack would first be a trinary (??) search--because I know the start & end values of the stack based on signpostings, determine which third I'm in and then look there. Only once I've honed into the correct third(ish) of the correct stack do I switch over to binary search: look at a book in the middle of my third, see if I need to go to left/right or up/down, move over a chunk and re-evaluate until I've found the right book.

Note that finding a book in a library has a new complexity beyond time (number of times we look at a book) and space (number of Dewey Decimal values we keep in our head) to optimize for: physical movement. This is why straight binary search would not be an optimal search method for finding a physical book. See also: https://jorendorff.github.io/hackday/2012/library/

## 4. Searching in a BST
*No coding is needed for these drills*. Once you have answered it, you can then code the tree and implement the traversal to see if your answer is correct.

1) Given a binary search tree whose traversals are:  
in-order: 14 15 19 25 27 35 79 89 90 91  
pre-order: 35 25 15 14 19 27 89 79 91 90  
What would be its postorder traversal?  
    * 14, 19, 15, 27, 25, 79, 90, 91, 89, 35

2) The post order traversal of a binary search tree is 5 7 6 9 11 10 8. What is its pre-order traversal?
    * 8, 6, 5, 7, 10, 9, 11

## 5. Implement different tree traversals
Using your BinarySearchTree class from your previous lesson, create a binary search tree with the following dataset: 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22. Then implement inOrder(), preOrder(), and postOrder() functions. Test your functions with the following datasets.

* A pre-order traversal should give you the following order: 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90
* In-order: 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90
* Post-order: 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25

**See searching-drills.js: inOrder, preOrder, postOrder**

## 6. Find the next commanding officer
Suppose you have a tree representing a command structure of the Starship USS Enterprise.

```
               Captain Picard
             /                \
    Commander Riker       Commander Data
      /         \               \
 Lt. Cmdr.   Lt. Cmdr.          Lt. Cmdr.
 Worf        LaForge            Crusher
   /                           /
Lieutenant                  Lieutenant
security-officer            Selar
```

This tree is meant to represent who is in charge of lower-ranking officers. For example, Commander Riker is directly responsible for Worf and LaForge. People of the same rank are at the same level in the tree. However, to distinguish between people of the same rank, those with more experience are on the left and those with less on the right (i.e., experience decreases from left to right). Suppose a fierce battle with an enemy ensues. Write a program that will take this tree of commanding officers and outlines the ranking officers in their ranking order so that if officers start dropping like flies, we know who is the next person to take over command.

**Analysis:** we want a readout of the tree from top to bottom (highest to lowest ranked), left to right (most experience to least experience): essentially, BFS.

**See searching-drills.js: bfs**

## 7. Max profit
The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the company on a particular day, and sell the shares on a following day, write an algorithm to work out what the maximum profit you could make would be.

**Analysis:** we want to find the greatest spread between an earlier (lower) value and a later (higher) value. This is a lot like arrays drill 7.

**See searching-drills.js: bfs**

**Time complexity:** this is a nested loop, so O(n^2)

## 8. Egg drop (optional)
This is a fun exercise to do - consider this optional after you are done with all the exercises above. Imagine that you wanted to find the highest floor of a 100 story building that you could drop an egg from without the egg breaking. But you only have 2 eggs. Write an algorithm to find out in the most efficient way which floors you should drop the eggs from. After you have understood the question and made some attempts to solve the problem, go through this reading before you start coding: http://datagenetics.com/blog/july22012/index.html.