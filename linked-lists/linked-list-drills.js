const LinkedList = require('./linked-list.js');

// DRILL 2

function main() {
    let SLL = new LinkedList();
    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');

    SLL.insertLast('Tauhida');
    SLL.remove('Husker');

    SLL.insertBefore('Boomer', 'Athena');
    SLL.insertAfter('Helo', 'Hotdog');
    SLL.insertAt(3, 'Kat');
    SLL.remove('Tauhida');

    return SLL;
}


// DRILL 3

function display(list) {
    let printNode = list.head;
    while (printNode !== null) {
        console.log(printNode);
        printNode = printNode.next;
    }
}

function size(list) {
    // Initialize counter, traverse the list counting steps
    let counter = 0;
    let currNode = list.head;
    while (currNode !== null) {
        counter++;
        currNode = currNode.next;
    }

    return counter;
}

function isEmpty(list) {
    return (list.head === null)
}

function findPrevious(list, item) {
    // If item is head, return
    if (list.head.value === item) {
        console.log('Item is head, no previous node available');
        return;
    }

    // Start at head and traverse, looking for the *next* node to equal item
    let currNode = list.head;
    while ((currNode !== null) && (currNode.next.value !== item)) {
        currNode = currNode.next;
    }
    
    // If you traverse to the end, return item not found
    if (currNode === null) {
        console.log('Item not found');
        return;
    }
    
    return currNode;
}

function findLast(list) {
    // If list is empty, return null
    if (!list.head) {
        return null;
    }

    // Traverse list until you find the node pointing to null
    let currNode = list.head;
    while (currNode.next !== null) {
        currNode = currNode.next;
    }

    return currNode;
}

console.log(findLast(main()));