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

console.log(isBST(drill3nums()));