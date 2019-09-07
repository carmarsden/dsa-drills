class _Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
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

        // Else, the current last & new node should point to each other
        if (this.last) {
            node.prev = this.last;
            this.last.next = node;
        }
        // Update queue last pointer
        this.last = node;
    }

    dequeue() {
        // If the queue is empty, there is nothing to return
        if (this.first === null) {
            return;
        }

        // Else, find the first, update queue first to pointer to the next node and update that node's prev pointer to null
        const node = this.first;
        this.first = this.first.next;
        this.first.prev = null;
        // Update queue last to null if this was the last item
        if (node === this.last) {
            this.last = null;
        }
        return node.value;
   }

}

module.exports = Queue;