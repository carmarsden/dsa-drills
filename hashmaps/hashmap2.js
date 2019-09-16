const LinkedList = require('../linked-lists/linked-list');

class HashMap2 {
    constructor(initialCapacity=8) {
        this.length = 0;
        this._hashTable = [];
        this._capacity = initialCapacity;
    }

    get(key) {
        const index = this._findSlot(key);
        const slot = this._hashTable[index];

        // if nothing at that slot or it's a LL without a head, throw error
        if (slot === undefined || slot.head === null) {
            throw new Error('Key error')
        }

        // otherwise traverse LL using modified find method, similar to what's used in set below
        let currNode = slot.head;
        while (currNode.value.key !== key) {
            if (currNode.next === null) {
                throw new Error('Key not found')
            } else {
                currNode = currNode.next
            }
        }

        // once found, return the value
        return currNode.value.value;
    }

    set(key, value) {
        const loadRatio = (this.length + 1) / this._capacity;
        if (loadRatio > HashMap2.MAX_LOAD_RATIO) {
            this._resize(this._capacity * HashMap2.SIZE_RATIO);
        }

        const index = this._findSlot(key);
        // if there's nothing at that index yet, create LL & increase hashmap length
        if (this._hashTable[index] === undefined) {
            this._hashTable[index] = new LinkedList();
            this.length++;
        }

        // given the slot, find the key to overwrite it or else add this key/val to the list (modified find method)
        let slot = this._hashTable[index];
        let currNode = slot.head;

        // if there's no head, insert new key/val at the head
        if (!slot.head) {
            slot.insertFirst({
                key,
                value
            });
            return slot.head;
        }

        // traverse the list until it's found, or if we're at the end insert new key/val last
        while (currNode.value.key !== key) {
            if (currNode.next === null) {
                slot.insertLast({
                    key,
                    value
                });
                return currNode.next;
            } else {
                currNode = currNode.next
            }
        }

        // once found, replace the value
        currNode.value.value = value;
        return currNode;
    }

    delete(key) {
        const index = this._findSlot(key);
        const slot = this._hashTable[index];
        if (slot === undefined) {
            throw new Error('Key error');
        }

        // find & delete the key within the linkedlist at that index, revamped "remove" method from existing LL implementation
        if (!slot.head) {   
            throw new Error('Key not found');   // If the list is empty, throw error
        }
        if (slot.head.value.key === key) {
            slot.head = slot.head.next;     // If key is at the head, reroute the head
        }

        // Start at head and track previous, traverse the list until you hit item to remove
        let currNode = slot.head;
        let previousNode = slot.head;
        while ((currNode !== null) && (currNode.value.key !== key)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            throw new Error('Key not found');   // If you traverse to the end, return item not found
        }

        // Otherwise, once found just re-route previous node to point to the next one
        previousNode.next = currNode.next;
    }

    _findSlot(key) {
        const hash = HashMap2._hashString(key);
        const start = hash % this._capacity;
        const index = start % this._capacity;

        return index;
    }

    _resize(size) {
        const oldSlots = this._hashTable;
        this._capacity = size;

        // Reset the length - it will get rebuilt as you add the items back
        this.length = 0;
        this._hashTable = [];

        for (const slot of oldSlots) {
            // if there's something in the slot, need to traverse the LL and add each item back in
            if ((slot !== undefined) && (slot.head !== null)) {
                let currNode = slot.head;
                while (currNode !== null) {
                    this.set(currNode.value.key, currNode.value.value);
                    currNode = currNode.next;
                }
            }
        }
    }

    static _hashString(string) {
        let hash = 5381;
        for (let i = 0; i < string.length; i++) {
            // Notes from Thinkful: bitwise left shift with 5 0s - this would be similar to hash*31, 31 being the decent prime number but bit shifting is a faster way to do this. Tradeoff is understandability.
            hash = (hash << 5) + hash + string.charCodeAt(i);
            // Converting hash to a 32 bit integer
            hash = hash & hash;
        }
        // Making sure hash is unsigned (non-negative) number
        return hash >>> 0;
    }
}

module.exports = HashMap2;