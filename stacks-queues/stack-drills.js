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
    return stack.top.value;
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

// DRILL 4

/*
Extension exercise: Recognize 3 pairs of brackets: (), [], and {}. These must be correctly nested; "([)]" is incorrect, and should report an error at the ), stating that you were expecting a ] but found a ). If this is starting to look and sound very familiar, congratulations - you're beginning to write a simple language parser!

Extension extension exercise: Also recognize 2 types of quote character: "" and ''. Inside quotes, brackets aren't counted at all - in fact, nothing is counted until you reach the corresponding close quote. 
*/

function drill4(str) {
    const openStack = new Stack();

    for (i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            openStack.push(i)
        }

        if (str[i] === ')') {
            if (openStack.top === null) {
                return `Error: close paren without opener at character # ${i}`
            } else {
                openStack.pop()
            }
        }
    }

    if (openStack.top !== null) {
        return `Error: open paren without closer at character # ${openStack.pop()}`
    }

    return true
}


// DRILL 5

function sort(stack) {
    const sorted = new Stack();

    // go through the full stack
    while (stack.top !== null) {
        // take the item in question out of the unsorted stack
        const currNode = stack.pop();

        // if there's nothing in the sorted stack, just add it
        if (sorted.top === null) {
            sorted.push(currNode)
        } else {
            console.log('currNode: ', currNode)
            console.log('sorted top value: ', sorted.top.value)
            // move items from sorted stack to original stack until currNode is no longer bigger than the top of sorted stack (or sorted stack is empty)
            while ((sorted.top !== null) && (currNode > sorted.top.value)) {
                stack.push(sorted.pop())
            }
            sorted.push(currNode)
        }
    }

    console.log('DONE SORTING NOW ---------')
    return sorted;
}

function createSort() {
    let sort = new Stack();

    sort.push(3);
    sort.push(2);
    sort.push(5);
    sort.push(7);
    sort.push(1);

    return sort;
}

display(sort(createSort()))