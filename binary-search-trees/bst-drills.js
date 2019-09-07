const BinarySearchTree = require('./bst');

// DRILL 3

/*
* Create a binary search tree called BST and insert E A S Y Q U E S T I O N into your tree. Compare your result with the result from the 1st exercise.
*/

function drill3nums() {
    const BST = new BinarySearchTree();

    BST.insert(3, 3);
    BST.insert(1, 1);
    BST.insert(4, 4);
    BST.insert(6, 6);
    BST.insert(9, 9);
    BST.insert(2, 2);
    BST.insert(5, 5);
    BST.insert(7, 7);

    return BST;
}

function drill3letts() {
    const BST = new BinarySearchTree();

    BST.insert('E');
    BST.insert('A');
    BST.insert('S');
    BST.insert('Y');
    BST.insert('Q');
    BST.insert('U');
    BST.insert('E');
    BST.insert('S');
    BST.insert('T');
    BST.insert('I');
    BST.insert('O');
    BST.insert('N');

    return BST;
}


// DRILL 5

function findHeight(tree) {
    // if there's no node here, return 0
    if (tree === null) {
        return 0
    }

    // otherwise, find the height of the left & right sub-trees
    let leftHeight = findHeight(tree.left);
    let rightHeight = findHeight(tree.right);

    // return 1 (for current node) plus greater of left or right sub-tree height
    return 1 + Math.max(leftHeight, rightHeight)
}


// DRILL 6

function isBST(tree) {
    // if there's no node here, return true
    if (!tree) {
        return true;
    }

    // by default, left & right branches are ok until proven otherwise
    let leftOk = true;
    let rightOk = true;

    // if they exist, compare children: left child must be smaller, right child must be larger
    if (tree.left) {
        leftOk = (tree.left.value < tree.value) ? true : false;
    }
    if (tree.right) {
        rightOk = (tree.right.value > tree.value) ? true : false; 
    }

    // return true if all of the following are true: left true, right true, and the left & right subtrees are both also BST's
    return (leftOk && rightOk && isBST(tree.left) && isBST(tree.right))
}


// DRILL 7

function reverseOrderTraverse(node, fn) {
    // reverse order traversal:
    // base case: if there's no node, return
    if (!node) {
        return;
    }

    // otherwise, search (in order) right subtree, node, left subtree
    // when you evaluate the node, evaluate via callback function
    // return value from either the searching or the callback function

    return reverseOrderTraverse(node.right, fn) 
        || fn(node)
        || reverseOrderTraverse(node.left, fn)
}

function kLargest(tree, k, count=0) {
    // result will be the value that reverseOrderTraverse spits out
    let result = reverseOrderTraverse(tree, function(node) {
        // when you evaluate the node, increase the count
        count++;
        console.log(`just looked at ${node.value}; current count ${count}`)
        // if we've reached the desired k, return the current node value to reverseOrderTraverse (so it can return it back to this result variable)
        if (count === k) {
            return node.value
        }
    });

    return result;
}

// console.log(kLargest(drill3nums(), 3))

// DRILL 8

function isBalanced(tree) {
    // use findHeight algorithm to find the height of each of the two subtrees

    let leftHeight = 0;
    let rightHeight = 0;

    if (tree.left) {
        leftHeight = findHeight(tree.left)
    }

    if (tree.right) {
        rightHeight = findHeight(tree.right)
    }

    // difference between left & right must be no more than 1 if isBalanced = true
    return (Math.abs(leftHeight - rightHeight) <= 1)
}

function createBalanced() {
    const BST = new BinarySearchTree();

    BST.insert(4, 4);
    BST.insert(1, 1);
    BST.insert(6, 6);
    BST.insert(9, 9);
    BST.insert(2, 2);
    BST.insert(5, 5);
    BST.insert(7, 7);

    return BST;
}


// DRILL 9

function identicalTrees(arr1, arr2) {
    // BST's will end up sorted, so we can just sort and compare the two input arrays. If they are the same, BST's will end up the same

    // Sort arrays
    arr1 = arr1.sort();
    arr2 = arr2.sort();

    // Compare arrays
    if (arr1.length !== arr2.length) {
        return false
    }

    for (i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }

    return true;
}

console.log(identicalTrees([3, 5, 4, 6, 7, 0, 2], [3, 1, 5, 2, 4, 6, 0]))