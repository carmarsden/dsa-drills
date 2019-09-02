class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    find(item) { 
        // Start at the head
        let currNode = this.head;

        // If the list is empty, return null
        if (!this.head) {
            return null;
        }

        // Traverse the list until it's found return null if you reach the end
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }

        // Return it once found
        return currNode;
    }

    remove(item){ 

        // If the list is empty, return null
        if (!this.head) {
            return null;
        }

        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }

        // Start at head and track previous
        let currNode = this.head;
        let previousNode = this.head;

        // Traverse the list, keeping track of previous, until you hit the item to remove
        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }

        // If you traverse to the end, return item not found
        if (currNode === null) {
            console.log('Item not found');
            return;
        }

        // Otherwise, re-route previous node to point to the next one
        previousNode.next = currNode.next;
    }

}