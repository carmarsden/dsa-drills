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

//console.log(reverse(main()));



// Given a sorted linked list, write an algorithm to delete all duplicate numbers from the sorted linked list.

function createSortedList() {
    let sorted = new LList();

    sorted.insertFirst(1);
    sorted.insertLast(2);
    sorted.insertLast(3);
    sorted.insertLast(3);
    sorted.insertLast(3);
    sorted.insertLast(5);
    sorted.insertLast(8);
    sorted.insertLast(8);
    sorted.insertLast(10);

    return sorted;
}

function deleteDup(list) {
    // iterate through list
    // keep track of current
    // if the next value is the same as current value, redirect the current.next
    
    // if list is empty
    if (!list.head) {
        return list;
    }

    let currNode = list.head;

    while (currNode.next !== null) {
        if (currNode.value === currNode.next.value) {
            currNode.next = currNode.next.next;
        } else {
            currNode = currNode.next;
        }
    }

    return list;
}

//deleteDup(createSortedList()).display();




/*
Given 2 linked lists, where each node in each linked list represents a character in a string, write a function compare() that compares the 2 strings, i.e., it returns 0 if both strings are the same, 1 if the 1st linked list is lexicographically greater, and -1 if the 2nd string is lexicographically greater.
- Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o` 
- Output: `1`

- Input: `list 1: B->i->l->b->o, list 2: B->i->l->b->o`
- Output: `0`

- Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o->b` 
- Output: `-1`
*/

function lexList1() {
    let word = new LList();

    word.insertFirst('B');
    word.insertLast('i');
    word.insertLast('l');
    word.insertLast('b');
    word.insertLast('o');
    word.insertLast('a');

    return word;
}

function lexList2() {
    let word = new LList();

    word.insertFirst('b');
    word.insertLast('i');
    word.insertLast('l');
    word.insertLast('b');
    word.insertLast('o');
    word.insertLast('b');

    return word;
}

function compareLex(list1, list2) {
    // start at heads and compare
    // continue and compare

    // make sure both lists aren't empty
    if (!list1.head || !list2.head) {
        return undefined;
    }

    let currNode1 = list1.head;
    let currNode2 = list2.head;

    while (currNode1 && currNode2) {
        const val1 = currNode1.value.toLowerCase();
        const val2 = currNode2.value.toLowerCase();

        if (val1 > val2) {
            return 1;
        }
        if (val1 < val2) {
            return -1;
        }
        
        if (val1 === val2) {
            // move on to the next letters
            currNode1 = currNode1.next;
            currNode2 = currNode2.next;
        }
    }

    // while loop aborts when at least one of the currNodes ends in null
    // whichever one still exists (not null) is the lexicographically greater
    if (currNode1) {
        return 1
    } else if (currNode2) {
        return -1
    } else {
        return 0
    }
}

console.log(compareLex(lexList1(), lexList2()));