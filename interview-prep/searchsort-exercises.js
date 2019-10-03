// 	know sorting methods: implement merge sort, quick sort, implement binary search

const DATA = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

const SORTED = [1, 2, 3, 5, 6, 7, 9, 11, 13, 14, 15, 16, 17, 21, 22, 23, 24, 25, 26, 27, 28, 30, 31, 32, 33, 34, 38, 39, 40, 42, 43, 44, 45, 46, 48, 49, 50, 51, 53, 54, 55, 56, 62, 63, 64, 65, 67, 68, 69, 70, 72, 73, 76, 78, 80, 81, 82, 83, 84, 85, 87, 88, 89, 90, 91, 93, 97, 98];


// MERGE SORT

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle, arr.length);

    mergeSort(left);
    mergeSort(right);
    return merge(left, right, arr);
}

function merge(left, right, arr) {
    // track indexes
    let leftIdx = 0;
    let rightIdx = 0;
    let resultsIdx = 0;

    // first merge while there are still values in both left & right
    while (leftIdx < left.length && rightIdx < right.length) {
        if (left[leftIdx] < right[rightIdx]) {
            arr[resultsIdx] = left[leftIdx];
            resultsIdx++;
            leftIdx++;
        } else {
            arr[resultsIdx] = right[rightIdx];
            resultsIdx++;
            rightIdx++;
        }
    }

    // then finish off whichever array is left
    while (leftIdx < left.length) {
        arr[resultsIdx] = left[leftIdx];
        resultsIdx++;
        leftIdx++;
    }

    while (rightIdx < right.length) {
        arr[resultsIdx] = right[rightIdx];
        resultsIdx++;
        rightIdx++;
    }

    return arr;
}

// console.log(mergeSort(DATA));



// BINARY SEARCH

function binarySearch(item, arr, start = 0, end = arr.length - 1) {
    if (start >= end) {
        console.log(`Item ${item} not found!`);
        return undefined;
    }

    let middle = Math.floor((start + end) / 2);
//    console.log(`Bounds: arr[${start}] = ${arr[start]}, arr[${end}] = ${arr[end]}; Looking at arr[${middle}] = ${arr[middle]}`);

    if (arr[middle] === item) {
        console.log(`Item ${item} found at index ${middle}`);
        return arr[middle];
    }

    if (arr[middle] > item) {
        // search to the left
        return binarySearch(item, arr, start, middle - 1);
    } else {
        // search to the right
        return binarySearch(item, arr, middle + 1, end);
    }
}

console.log(binarySearch(71, SORTED));