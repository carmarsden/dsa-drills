const Array = require('./array.js');

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);

    console.log(arr);
}

function drill2() {

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add items to the array
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);

    console.log(arr);
}


function drill3() {

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add items to the array
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    arr.pop();
    arr.pop();
    arr.pop();  

    console.log(arr);
}

function drill4() {

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add items to the array
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    arr.pop();
    arr.pop();
    arr.pop();  
    console.log(arr.get(0));

    arr.remove(2);
    arr.remove(1);
    arr.remove(0);

    arr.push("tauhida");
    console.log(arr.get(0));

    console.log(arr);

}

function drill5(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            result += '%20'
        } else {
            result += string[i]
        }
    }

    console.log(result);
    return result;
}

function drill6(arrNums) {
    const result = [];
    for (let i = 0; i < arrNums.length; i++) {
        if (arrNums[i] >= 5) {
            result.push(arrNums[i])
        }
    }

    console.log(result);
    return result;
}


function drill7(arrNums) {
    let largestSum = arrNums[0];

    for (let i = 0; i < arrNums.length; i++) {
        let newSum = arrNums[i];

        for (let j = i + 1; j < arrNums.length; j++) {
            newSum += arrNums[j];
            if (newSum > largestSum) {
                largestSum = newSum
            }    
        }
    }

    console.log(largestSum);
    return largestSum;
}

function drill8(arr1, arr2) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length || j < arr2.length) {
        console.log('current i idx, j idx, values: ', i, j, arr1[i], arr2[j]);

        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
            console.log('arr1 was smaller (or equal)!');
        } else if (arr1[i] > arr2[j]) {
            result.push(arr2[j]);
            j++;
            console.log('arr2 was smaller!');
        } else if (i >= arr1.length) {
            result.push(arr2[j]);
            j++;
            console.log('no more arr1!')
        } else if (j >= arr2.length) {
            result.push(arr1[i]);
            i++;
            console.log('no more arr2!')
        }
    }

    console.log(result);
    return result;
}

function drill9(fullStr, deleteStr) {
    let result = '';

    // note: could transform both full string & delete string to lowercase here to avoid being case-sensitive

    for (let i = 0; i < fullStr.length; i++) {
        console.log('trailing result, new letter: ', result, fullStr[i])
        if (!deleteStr.includes(fullStr[i])) {
            result += fullStr[i];
        }
    }

    console.log(result);
    return result;
}

function drill10(arrNums) {
    // iterate through once to find the total product of all numbers
    let totalProduct = arrNums[0];
    for (let i = 1; i < arrNums.length; i++) {
        totalProduct = totalProduct * arrNums[i];
    }

    // iterate through once more to generate the results array
    const result = [];
    for (let i = 0; i < arrNums.length; i++) {
        result.push(totalProduct / arrNums[i])
    }

    console.log(result);
    return result;
}


function drill11(array) {

    // find rows & columns with a 0
    const rowsToClear = new Set;
    const colsToClear = new Set;
    
    for (let row = 0; row < array.length; row++) {
        for (let col = 0; col < array[row].length; col++) {
            if (array[row][col] === 0) {
                // log the row index in rowsToClear
                rowsToClear.add(row)

                // log the column index in colsToClear
                colsToClear.add(col)
            }
        }
    }

    console.log('rows to clear: ', rowsToClear);
    console.log('cols to clear: ', colsToClear);


    // clear the appropriate rows
    rowsToClear.forEach((row, key, set) => {
        array[row] = array[row].fill(0)
    })

    // clear the appropriate cols
    colsToClear.forEach((col, key, set) => {
        for (let i = 0; i < array.length; i++) {
            array[i][col] = 0
        }
    })

    console.log(array);
    return array;
}

drill11([[1,0,1,1,0],
        [0,1,1,1,0],
        [1,1,1,1,1],
        [1,0,1,1,1],
        [1,1,1,1,1]]);