const Stack = require('./stack.js');

// DRILL 1

function main() {
    let starTrek = new Stack();

    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');

    return starTrek;
}


// DRILL 2

function peek(stack) {
    return stack.top;
}

function isEmpty(stack) {
    return (stack.top === null)
}

function display(stack) {
    let printNode = stack.top;
    while (printNode !== null) {
        console.log(printNode);
        printNode = printNode.next;
    }
    return;
}

function drill2() {
    let drill2 = main();
    drill2.pop();
    drill2.pop();
    drill2.push('Scotty');
    display(drill2);
    return;
}


// DRILL 3

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let strStack = new Stack();

    for (i = 0; i < str.length; i++) {
        strStack.push(str[i]);
    }

    let compareStr = '';

    while (strStack.top !== null) {
        compareStr += strStack.pop();
    }

    return (str === compareStr)
}

