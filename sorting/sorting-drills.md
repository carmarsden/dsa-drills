## 1. Understanding merge sort
Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40 

* What is the resulting list that will be sorted after 3 recursive calls to mergesort?
	* [21, 1, 26, 45]
* What is the resulting list that will be sorted after 16 recursive calls to mergesort?
	* [9]
* What are the first 2 lists to be merged? 
	* [21] and [1]
* Which two lists would be merged on the 7th merge?
	* 7th *merge* (not just 7th **return**): [1, 21, 26, 45] and [2, 9, 28, 29]


Merge sort recursive calls breakdown:

* *Call 1 on full dataset*
* Left = 21, 1, 26, 45, 29, 28, 2, 9 
	* *Call 2 on this left:*
	* Left = 21, 1, 26, 45
		* *Call 3 on this left:*
		* Left = 21, 1
			* *Call 4 on this left:*
			* Left = 21
				* *Call 5 on this left:*
				* **Return** 21
			* Right = 1
				* *Call 6 on this right:*
				* **Return** 1
			* **Return** merged sorted halves: [21], [1] --> [1, 21]
		* Right = 26, 45
			* *Call 7 on this right:*
			* Left = 26
				* *Call 8 on this left:*
				* **Return** 26
			* Right = 45
				* *Call 9 on this right:*
				* **Return** 45
			* **Return** merged sorted halves: [26], [45] --> [26, 45]
		* **Return** merged sorted halves: [1, 21], [26, 45] --> [1, 21, 26, 45]
	* Right = 29, 28, 2, 9
		* *Call 10 on this right:*
		* Left = 28, 29
			* *Call 11 on this left:*
			* Left = 28
				* *Call 12 on this left:*
				* **Return** 28
			* Right = 29
				* *Call 13 on this right:*
				* **Return** 29
			* **Return** merged sorted halves: [28], [29] --> [28, 29]
		* Right = 2, 9
			* *Call 14 on this right:*
			* Left = 2
				* *Call 15 on this left:*
				* **Return** 2
			* Right = 9
				* *Call 16 on this right:*
				* **Return** 9
			* **Return** merged sorted halves: [2], [9] --> [2, 9]
		* **Return** merged sorted halves: [28, 29], [2, 9] --> [2, 9, 28, 29]
	* **Return** merged sorted halves: [1, 21, 26, 45], [2, 9, 28, 29] --> [1, 2, 9, 21, 26, 28, 29, 45]
* Right = 16, 49, 39, 27, 43, 34, 46, 40
	* *Call 17 on this right:*
	* Left = 16, 49, 39, 27
		* *Call 18 on this left:*
		* Left = 16, 49
			* *Call 19 on this left:*
			* Left = 16
				* *Call 20 on this left:*
				* **Return** 16
			* Right = 49
				* *Call 21 on this right:*
				* **Return** 49
			* **Return** merged sorted halves: [16], [49] --> [16, 49]
		* Right = 39, 27
			* *Call 22 on this right:*
			* Left = 39
				* *Call 23 on this left:*
				* **Return** 39
			* Right = 27
				* *Call 24 on this right:*
				* **Return** 27
			* **Return** merged sorted halves: [39], [27] --> [27, 39]
		* **Return** merged sorted halves: [16, 49], [27, 39] --> [16, 27, 39, 49]
	* Right = 43, 34, 46, 40
		* *Call 25 on this right:*
		* Left = 43, 34
			* *Call 26 on this left:*
			* Left = 43
				* *Call 27 on this left:*
				* **Return** 43
			* Right = 34
				* *Call 28 on this right:*
				* **Return** 34
			* **Return** merged sorted halves: [43], [34] --> [34, 43]
		* Right = 46, 40
			* *Call 29 on this right:*
			* Left = 46
				* *Call 30 on this left:*
				* **Return** 46

			* Right = 40
				* *Call 31 on this right:*
				* **Return** 40
			* **Return** merged sorted halves: [46], [40] --> [40, 46]
		* **Return** merged sorted halves: [34, 43], [40, 46] --> [34, 40, 43, 46]
	* **Return** merged sorted halves: [16, 27, 39, 49], [34, 40, 43, 46] --> [16, 27, 34, 39, 40, 43, 46, 49]
* **Return** merged sorted halves: [1, 2, 9, 21, 26, 28, 29, 45], [16, 27, 34, 39, 40, 43, 46, 49] --> **[1, 2, 9, 21, 26, 27, 28, 29, 34, 39, 40, 43, 45, 46, 49]**

## 2. Understanding quicksort

1) Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct about the partition step? Explain your answer.

* The pivot could have been 17, but could not have been 14
* **The pivot could have been either 14 or 17**
    * This is the true statement, because for both 14 and 17, everything to the left is smaller and everything to the right is larger
* Neither 14 nor 17 could have been the pivot
* The pivot could have been 14, but could not have been 17

2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after the second partitioning according to the quicksort algorithm.

* When using the last item on the list as a pivot
    * First partition: 10, 3, 9, **12**, 19, 14, 17, 16, 13, 15
    * Second partition: 3, **9**, 10, *12, 19, 14, 17, 16, 13, 15*
* When using the first item on the list as a pivot
    * First partition: 13, 10, 3, 9, 12, **14**, 17, 15, 19, 16
    * Second partition: 10, 3, 9, 12, **13**, *14, 17, 15, 19, 16*

## 3. Implementing quicksort

Write a function qSort that sorts a dataset using the quicksort algorithm. The dataset to sort is: 89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5.

**See sorting-drills.js: qSort**

## 4. Implementing merge sort

Write a function mSort that sorts the dataset above using the merge sort algorithm.

**See sorting-drills.js: mSort**

## 5. Sorting a linked list using merge sort

Given a Linked List, sort the linked list using merge sort. You will need your linked list class from previous lesson to create the list and use all of its supplemental functions to solve this problem.

**See sorting-drills.js: mSortLL**

## 6. Bucket sort

Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are. You can't use arr.splice(), shift() or unshift() for this exercise.

## 7. Sort in place

Write an algorithm to shuffle an array into a random order in place (i.e., without creating a new array).

## 8. Sorting books

Imagine that I gave you 20 books to sort in alphabetical order. Express this as an algorithm and them implement your algorithm.