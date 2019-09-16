const BinarySearchTree = require('../binary-search-trees/bst');
const Queue = require('../stacks-queues/queue');

// DRILL 3

// Imagine you are looking for a book in a library with a Dewey Decimal index. How would you go about it? Can you express this process as a search algorithm? Implement your algorithm to find a book whose Dewey and book title is provided.




// DRILL 5

function drill5() {
    const bst = new BinarySearchTree();
    bst.insert(25, 25);
    bst.insert(15, 15);
    bst.insert(50, 50);
    bst.insert(10, 10);
    bst.insert(24, 24);
    bst.insert(35, 35);
    bst.insert(70, 70);
    bst.insert(4, 4);
    bst.insert(12, 12);
    bst.insert(18, 18);
    bst.insert(31, 31);
    bst.insert(44, 44);
    bst.insert(66, 66);
    bst.insert(90, 90);
    bst.insert(22, 22);

    return bst;
}

function inOrder(tree, values = []) {
    if (tree.left) {
        values = inOrder(tree.left, values)
    }

    values.push(tree.value)

    if (tree.right) {
        values = inOrder(tree.right, values)
    }

    return values;
}

function preOrder(tree, values = []) {
    values.push(tree.value)

    if (tree.left) {
        values = preOrder(tree.left, values)
    }

    if (tree.right) {
        values = preOrder(tree.right, values)
    }

    return values;
}

function postOrder(tree, values = []) {
    if (tree.left) {
        values = postOrder(tree.left, values)
    }

    if (tree.right) {
        values = postOrder(tree.right, values)
    }

    values.push(tree.value)

    return values;
}

//console.log(postOrder(drill5()));


// DRILL 6

function bfs(tree, values = []) {
    const queue = new Queue();
    queue.enqueue(tree);
    while (queue.first) {
        const node = queue.dequeue();
        values.push(node.value);

        if (node.left) {
            queue.enqueue(node.left);
        }

        if (node.right) {
            queue.enqueue(node.right);
        }
    }
    return values;
}

//console.log(bfs(drill5()))


// DRILL 7

// this was my initial implementation
// nested loop = time complexity O(n^2)
function drill7loop(arr) {
    if (arr.length < 2) {
        throw new Error('Array does not contain enough values')
    }

    let profit = arr[1] - arr[0];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const newProfit = arr[j] - arr[i];
            if (newProfit > profit) {
                profit = newProfit
            }
        }
    }

    return profit;
}

// second implementation
// only traverses the array once, so time complexity O(n)
function drill7(arr) {
    if (arr.length < 2) {
        throw new Error('Array does not contain enough values')
    }

    let minVal = arr[0];
    let profit = arr[1] - arr[0];

    for (let i = 1; i < arr.length; i++) {
        // track the minimum value seen so far
        if (arr[i] < minVal) {
            minVal = arr[i];
        }

        // iterate through the loop, comparing backwards to minVal seen so far
        if ((arr[i] - minVal) > profit) {
            profit = arr[i] - minVal;
        }
    }

    return profit;
}

console.log(drill7([128, 97, 121, 123, 98, 97, 105]))