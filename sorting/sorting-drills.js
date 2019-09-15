const LinkedList = require('../linked-lists/linked-list');
const datasort = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];


// DRILL 3

function qSort(array, left = 0, right = array.length - 1) {
    if (left >= right) {
        return array;
    }

    const pivot = partition(array, left, right);
    qSort(array, left, pivot - 1); // quick sort the left side
    qSort(array, pivot, right); // quick sort the right side

    return array;
}

function partition(array, left, right) {
    let pivot = right; // pivot from right side
    let i = left; // pointer to keep track of items that are smaller than pivot

    for (j = left; j < right; j++) { // iterate through array
        // if the item you're looking at is less than pivot
        // put it at the i pointer and then increase i pointer to the next item
        if (array[j] <= array[pivot]) { 
            swap(array, i, j);
            i++;
        }
    }

    swap(array, i, pivot); // finally, put the pivot into the next i pointer
    return i; // return the i pointer, which now contains pivot value
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

//console.log(qSort(datasort));


// DRILL 4

function mSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    mSort(left);
    mSort(right);
    return merge(left, right, array);
}

function merge(left, right, array) {
    let leftIdx = 0;
    let rightIdx = 0;
    let outputIdx = 0;

    // first compare while there are still values in both left & right arrays
    while (leftIdx < left.length && rightIdx < right.length) {
        if (left[leftIdx] < right[rightIdx]) {
            array[outputIdx++] = left[leftIdx++];
        }
        else {
            array[outputIdx++] = right[rightIdx++];
        }
    }

    // then finish out whichever array has values is left
    for (let i = leftIdx; i < left.length; i++) {
        array[outputIdx++] = left[i];
    }

    for (let i = rightIdx; i < right.length; i++) {
        array[outputIdx++] = right[i];
    }

    return array;
}

//console.log(mSort(datasort));


// DRILL 5

// copy helper functions from linked list drills
function display(list) {
    let printNode = list.head;
    while (printNode !== null) {
        console.log(printNode);
        printNode = printNode.next;
    }
}
function findMiddle(list) {
    // If list is empty, return null
    if (!list.head) {
        return null;
    }

    // Establish two pointers, one going at 'double' speed
    let singlePointer = list.head;
    let doublePointer = list.head;

    // As long as there are two more nodes to traverse, increment pointers
    while ((doublePointer.next !== null) && (doublePointer.next.next !== null)) {
        singlePointer = singlePointer.next;
        doublePointer = doublePointer.next.next;
    }

    return singlePointer;
}
class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

// merge sort functions

function createList() {
    const list = new LinkedList();

    for (i = 0; i < datasort.length; i++) {
        list.insertFirst(datasort[i]);
    }

    return list;
}

function mSortLL(list) {
    // if the list is empty or only has one node
    if (!list.head || !list.head.next) {
        return list;
    }

    const middle = findMiddle(list);
    const middleNext = middle.next;
    middle.next = null;

    const rightList = new LinkedList();
    rightList.head = middleNext;

    const left = mSortLL(list); // merge sort the left half of the list (now ending at middle)
    const right = mSortLL(rightList); // morge sort the right half of the list (starting from middleNext)
    return mergeLL(left, right);
}

function mergeLL(left, right) {
    // linked list merge function: return a list containing the current correct node (the one of the two lists with smaller value), and re-wire its next to point to the next correct node

    let result = new LinkedList();

    let leftPointer = left.head;
    let rightPointer = right.head;
    let resultPointer = result.head;

    // first compare while there are still values in both left & right lists
    while (leftPointer && rightPointer) {
        let nextVal;
        if (leftPointer.value < rightPointer.value) {
            nextVal = leftPointer.value;
            leftPointer = leftPointer.next;
        } else {
            nextVal = rightPointer.value;
            rightPointer = rightPointer.next;
        }

        if (resultPointer === null) {
            result.insertFirst(nextVal);
            resultPointer = result.head;
        } else {
            resultPointer.next = new Node(nextVal, null);
            resultPointer = resultPointer.next;
        }
    }

    // then attach on whichever list has values left
    if (leftPointer) {
        resultPointer.next = leftPointer;
    } else if (rightPointer) {
        resultPointer.next = rightPointer;
    }

    return result;
}

//display(mSortLL(createList()));


// DRILL 6

// helper function insertionSort to sort within the buckets
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        while ((j > 0) && (arr[j-1] > arr[j])) {
            swap(arr, j, j-1);
            j--;
        }
    }

    return arr;
}

function bucketSort(arr, bucketSize) {
    if (arr.length <= 1) {
        return arr;
    }

    // establish bucketSize, default 5
    bucketSize = bucketSize || 5;

    // find min & max values
    let min = arr[0];
    let max = arr[0];
    arr.forEach(val => {
        if (val < min) {
            min = val;
        } else if (val > max) {
            max = val;
        }
    })

    // initialize buckets
    const bucketCount = Math.floor((max - min) / bucketSize) + 1;
    const arrOfBuckets = new Array(bucketCount);
    for (let i = 0; i < arrOfBuckets.length; i++) {
        arrOfBuckets[i] = [];
    }

    console.log('min, max, bucketSize, bucketCount: ', min, max, bucketSize, bucketCount)

    // push values into their buckets
    arr.forEach(val => {
        arrOfBuckets[Math.floor((val - min) / bucketSize)].push(val)
    })

    console.log('here are the buckets: ', arrOfBuckets)

    // sort each bucket using insertion sort, then push all values back into cleared input array
    arr.length = 0;
    arrOfBuckets.forEach(bucket => {
        insertionSort(bucket);
        bucket.forEach(val => {
            arr.push(val)
        });
    })

    return arr;
}

const dataCopy = datasort.slice();
// console.log(bucketSort(dataCopy));


// DRILL 7

function shuffle(arr) {
    // toShuffle is the number of items left to be shuffled (starts with all elements in the array)
    let toShuffle = arr.length;

    while (toShuffle > 1) {
        // choose a new element at random
        // nextEl will be an int from range 0 to current toShuffle - 1 (math.floor)
        const nextEl = Math.floor(Math.random() * toShuffle);

        // decrease toShuffle so it's the index for the end of our unshuffled array
        // (and we now have one less item still to shuffle)
        toShuffle--;

        // swap nextEl chosen at random with toShuffle (now the end of our unshuffled portion of array)
        swap(arr, toShuffle, nextEl)
    }

    return arr;
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
