// implement linked list class & methods
// Node construction: value, next
// List construction: head
// List methods: insertFirst, insertLast, remove, find, display, size, isEmpty, findPrevious, findLast


class _Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LList {
    constructor() {
        this.head = null;
    }

    insertFirst(value) {
        this.head = new _Node(value, this.head)
    }

    insertLast(value) {
        if (!this.head) {
            this.insertFirst(value)
        } else {
            let currNode = this.head;
            while (currNode.next !== null) {
                currNode = currNode.next;
            }

            currNode.next = new _Node(value, null);
        }
    }

    insertAfter(afterValue, newValue) {
        let currNode = this.head;
        while (currNode !== null) {
            if (currNode.value === afterValue) {
                currNode.next = new _Node(newValue, currNode.next);
                return currNode.next;
            }
            currNode = currNode.next;
        }
        return null;
    }

    find(value) {
        let currNode = this.head;
        while (currNode !== null) {
            if (currNode.value === value) {
                return currNode;
            } else {
                currNode = currNode.next;
            }
        }

        return null;
    }

    remove(value) {
        // if list is empty
        if (!this.head) {
            return null;
        }

        // if value is at the head
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        // otherwise search the list for it
        let currNode = this.head;
        while (currNode.next !== null) {
            if (currNode.next.value === value) {
                currNode.next = currNode.next.next;
                return;
            }
            currNode = currNode.next;
        }
        
        return null;
    }

    display() {
        let currNode = this.head;
        while (currNode !== null) {
            console.log(currNode.value);
            currNode = currNode.next;
        }
        return;
    }

    size() {
        let currNode = this.head;
        let counter = 0;

        while (currNode !== null) {
            counter++;
            currNode = currNode.next;
        }

        return counter;
    }

    isEmpty() {
        return (this.head) ? false : true;
    }

    findLast() {
        // if list is empty
        if (!this.head) {
            return null
        }

        let currNode = this.head;
        while (currNode.next !== null) {
            currNode = currNode.next;
        }

        return currNode;
    }

    findPrevious(value) {
        // if list is empty
        if (!this.head) {
            return null
        }

        // if value is at the head
        if (this.head.value === value) {
            return null;
        }

        // otherwise look for it
        let currNode = this.head;
        while (currNode.next !== null) {
            if (currNode.next.value === value) {
                return currNode;
            }
            currNode = currNode.next;
        }
        
        return null;
    }
}


function main() {
    let empty = new LList();

    let SLL = new LList();
    SLL.insertFirst('Apple');
    SLL.insertLast('Banana');
    SLL.insertLast('Carrot');
    SLL.insertLast('Dingo');
    SLL.insertLast('Ate my baby!');

    SLL.remove('Carrot');
    SLL.insertAfter('Banana', 'Cake');

    SLL.display();
//    console.log(empty.isEmpty());
//    console.log(SLL.findLast());
//    console.log(empty.findPrevious('Apple'));
    return SLL;
}

//console.log(main());
//main();



// detect a cycle in a linked list

function detectCycle(list) {
    // implement pointers
    let slowP = list.head;
    let fastP = list.head;

    while (fastP !== null && fastP.next !== null) {
        slowP = slowP.next;
        fastP = fastP.next.next;
        if (slowP == fastP) {
            return true;
        }
    }

    return false;
}

function createCycleList() {
    let cycle = new LList();

    cycle.insertFirst('One');
    cycle.insertLast('Two');
    cycle.insertLast('Three');
    cycle.insertLast('Four');
    cycle.insertLast('Five');
    cycle.insertLast('Six');

    cycle.find('Six').next = cycle.find('Two');
    return cycle;
}

// console.log(detectCycle(createCycleList()));



// reverse a linked list in place

function reverse(list) {
    // if the list is empty
    if (!list.head) {
        return null;
    }

    // else: track previous, curr, & next
    let prevNode = null;
    let currNode = list.head;
    let nextNode = currNode.next;

    while (currNode !== null) {
        // redirect the pointer backwards
        currNode.next = prevNode;

        // interate the trackers
        prevNode = currNode;
        currNode = nextNode;
        nextNode = nextNode ? nextNode.next : null;
    }

    // at the end, re-set the list head to previous (since curr is now null)
    list.head = prevNode;
    list.display();
    return list;
}

console.log(reverse(main()));
