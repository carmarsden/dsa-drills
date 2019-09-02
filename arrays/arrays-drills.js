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
    let result = [];
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

drill7([4, 6, -3, 5, -2, 1]);