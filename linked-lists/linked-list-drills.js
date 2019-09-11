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


// DRILL 5

function reverseList(list) {
    // If list is empty, return null
    if (!list.head) {
        return null;
    }

    // Track current node, prev node (to repoint the pointer), and next node (to know where to go next)

    let currNode = list.head;
    let prevNode = list.head;
    let nextNode = list.head.next;

    // Start at the head: point to null (this will become the end)
    list.head.next = null;

    while (nextNode !== null) {
        // iterate all our counters forward
        prevNode = currNode;
        currNode = nextNode;
        nextNode = currNode.next;

        // repoint currNode to point "backwards"
        currNode.next = prevNode;
    }

    // when you reach the end, currNode is the last one that isn't null so is new head
    list.head = currNode;

    return list
}


// DRILL 6

function thirdFromEnd(list) {
    // If list is empty, return null
    if (!list.head) {
        return null;
    }

    // Start tracking third from end pointer
    let minus2 = list.head;
    let currNode = list.head.next.next ? list.head.next.next : 'error';

    // If that generated errors, there is no 3rd from end
    if (currNode === 'error') {
        return null;
    }

    // Traverse list, incrementing trackers as you go, until you find the node pointing to null (the end)
    while (currNode.next !== null) {
        minus2 = minus2.next;
        currNode = currNode.next;
    }

    return minus2;
}


// DRILL 7

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


// DRILL 8

// Note: this implementation seems to work, however, tortoise & hare approach like above (send one pointer out faster and see if it ever circles back around to catch up with slower pointer) is better on space complexity as it doesn't require storing a separate Set

function createCycleList() {
    let cycleList = new LinkedList();
    cycleList.insertFirst('Apple');
    cycleList.insertLast('Banana');
    cycleList.insertLast('Clementine');
    cycleList.insertLast('Date');
    cycleList.insertLast('Elderberry');
    cycleList.insertLast('Fig');

    cycleList.insertAfter('Elderberry', 'Grapefruit');
    cycleList.find('Grapefruit').next = cycleList.find('Banana');

    return cycleList;
}

function identifyCycleList(list) {
    // Create a set to store nodes we've already seen
    let priorNodes = new Set();

    // Traverse the list, checking against the set and adding on
    let currNode = list.head;
    while (currNode !== null) {
        if (priorNodes.has(currNode)) {
            return true;
        }
        priorNodes.add(currNode);
        currNode = currNode.next;
    }

    return false;
}

console.log(identifyCycleList(createCycleList()))