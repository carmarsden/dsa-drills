class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert(key, value) {
        // If the tree is empty then we insert key & value to the root node
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }

        // If new key < node key, new node goes to left branch
        // Otherwise new key >= node key, so new node goes to right branch
        else if (key < this.key) {
            // If there's no left child, insert new node as the left child
            // Otherwise start insert search again on left child node
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this);
            } else {
                this.left.insert(key, value);
            }
        }
        else {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }

    find(key) {
        // If the key is at the root then return the value
        if (this.key == key) {
            return this.value;
        }

        // If key you want is < root (and there exists a left child), follow left branch and search again
        else if (key < this.key && this.left) {
            return this.left.find(key)
        }
        // If key you want is > root (and there exists a right child), follow right branch and search again
        else if (key > this.key && this.right) {
            return this.right.find(key)
        }

        // Otherwise you've searched the tree and item was not found
        else {
            throw new Error('Key error');
        }        
    }

    remove(key) {
        // Be sure you've found the right key
        if (this.key == key) {
            // 2 children: find min in right branch, update current node to that key/value, and remove original min node
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            // 1 child: replace node with its one child
            else if (this.left) {
                this._replaceWith(this.left);
            }
            else if (this.right) {
                this._replaceWith(this.right);
            }
            // 0 children: reaplce node with null (so references point to null)
            else {
                this._replaceWith(null);
            }
        }

        // Otherwise, search down the tree to find the right key
        else if (key < this.key && this.left) {
            this.left.remove(key)
        }
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }

        // Otherwise, we haven't found the key. Throw error!
        else {
            throw new Error('Key error');
        }
    }

    _replaceWith(node) {
        // if the node has a parent (isn't the root node), replacement is just rewiring pointers
        if (this.parent) {
            // Rewire appropriate parent pointer to the replacement node
            if (this == this.parent.left) {
                this.parent.left = node;
            } else if (this == this.parent.right) {
                this.parent.right = node;
            }

            // Rewire replacement node parent pointer to the current node parent
            if (node) {
                node.parent = this.parent;
            }
        }

        // if node is root node, replacement is copying replacement node properties (or null) onto current
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            } else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    _findMin() {
        // min is the deepest left-most node: try to go deeper, if you can't, return it
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }
}

module.exports = BinarySearchTree;