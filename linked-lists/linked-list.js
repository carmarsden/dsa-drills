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

    insertBefore(beforeItem, newItem){ 
        // If the list is empty, return null
        if (!this.head) {
            return null;
        }

        // If the beforeItem is head, make the newItem head
        if (this.head.value === beforeItem) {
            this.insertFirst(newItem);
            return;
        }

        // Start at head and traverse looking for beforeItem, tracking previous
        let currNode = this.head;
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== beforeItem)) {
            previousNode = currNode;
            currNode = currNode.next;
        }

        // If you traverse to the end, return item not found
        if (currNode === null) {
            console.log('Item not found');
            return;
        }

        // Otherwise, insert newItem, pointed from previousNode and pointing to currNode
        previousNode.next = new _Node(newItem, currNode);
    }

    insertAfter(afterItem, newItem){ 
        // If the list is empty, return null
        if (!this.head) {
            return null;
        }

        // Start at head and traverse looking for afterItem
        let currNode = this.head;
        while ((currNode !== null) && (currNode.value !== afterItem)) {
            currNode = currNode.next;
        }

        // If you traverse to the end, return item not found
        if (currNode === null) {
            console.log('Item not found');
            return;
        }

        // Otherwise, insert newItem, pointed from currNode and pointing to currNode's prior pointer
        currNode.next = new _Node(newItem, currNode.next);
    }

    insertAt(index, newItem){
        // If the list is empty, return null
        if (!this.head) {
            return null;
        }

        // If the index is 0, insert at head
        if (index === 0) {
            this.insertFirst(newItem);
        }

        // Otherwise, start at head and traverse up to index # of steps
        let currNode = this.head;
        for (let i = 1; i < index; i++) {
            currNode = currNode.next;

            // If you got to the end, throw index error
            if (currNode === null) {
                console.log('Index error, place not found');
                return;
            }
        }

        // Then put newItem after currNode
        currNode.next = new _Node(newItem, currNode.next);
    }


}

module.exports = LinkedList;