class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node(data);

        // If queue is empty, new node becomes first
        if (this.first === null) {
            this.first = node;
        }

        // Else, update current last to point to new node and update queue last to new node
        if (this.last) {
            this.last.next = node;
        }
        this.last = node;
    }

    dequeue() {
        // If the queue is empty, there is nothing to return
        if (this.first === null) {
            return;
        }

        // Else, find the first, update queue first to point to the next node
        // Update queue last to null if this was the last item
        // Return the old first
        const node = this.first;
        this.first = this.first.next;
        if (node === this.last) {
            this.last = null;
        }
        return node.value;
   }

}

module.exports = Queue;