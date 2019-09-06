class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        // If the stack is empty, node will become the top
        if (this.top === null) {
            this.top = new _Node(value, null);
            return this.top;
        }

        // Else, create new node with value and pointing to current top, and make it the new top
        const node = new _Node(value, this.top);
        this.top = node;
    }

    pop() {
        // Point stack top pointer to next item down, and return the prior node
        const node = this.top;
        this.top = node.next;
        return node.value;
    }
}

module.exports = Stack;