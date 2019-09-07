const Queue = require('./queue.js');
const Queue2 = require('./queue2.js');
const Stack = require('./stack.js');

// DRILL 6

function main() {
    const starTrekQ = new Queue();

    starTrekQ.enqueue('Kirk');
    starTrekQ.enqueue('Spock');
    starTrekQ.enqueue('Uhura');
    starTrekQ.enqueue('Sulu');
    starTrekQ.enqueue('Checkov');

    return starTrekQ;
}

function peek(q) {
    return q.first.value;
}

function isEmpty(q) {
    return (q.first === null)
}

function display(q) {
    let printNode = q.first;
    while (printNode !== null) {
        console.log(printNode);
        printNode = printNode.next;
    }
    return;
}

function drill6() {
    const drill6 = main();

    drill6.dequeue(); // removes Kirk
    drill6.dequeue(); // removes Spock
    drill6.enqueue('Kirk'); // adds Kirk back to the end of the queue

    display(drill6);
}


// DRILL 7

function drill7() {
    const starTrekQ = new Queue2();

    starTrekQ.enqueue('Kirk');
    starTrekQ.enqueue('Spock');
    starTrekQ.enqueue('Uhura');
    starTrekQ.enqueue('Sulu');
    starTrekQ.enqueue('Checkov');

    return starTrekQ;
}


// DRILL 8

function stackQueue() {
    const queue = new Stack();

    // To enqueue: push onto the stack
    queue.push('Kirk');
    queue.push('Spock');
    queue.push('Uhura');
    queue.push('Sulu');
    queue.push('Checkov');

    /* To dequeue: 
        create a temporary 2nd stack
        pop everything over there
        pop off the top to dequeue the oldest item (Kirk)
        pop everything back onto original queue stack
    */
    let dequeue = new Stack();
    while (queue.top !== null) {
        dequeue.push(queue.pop())
    }
    dequeue.pop()
    while (dequeue.top !== null) {
        queue.push(dequeue.pop())
    }
}


// DRILL 9

function pairDancers(danceArr) {
    const spareMen = new Queue();
    const spareWomen = new Queue();

    danceArr.forEach(dancer => {
        // for each sex:
        // if there's a spare opposite sex, pair them
        // otherwise, add the dancer to the appropriate queue

        if (dancer.sex === 'F') {
            if (spareMen.first) {
                console.log(`New pairing: ${dancer.name} with ${spareMen.dequeue()}`)
            } else {
                spareWomen.enqueue(dancer.name)
            }
        }

        if (dancer.sex === 'M') {
            if (spareWomen.first) {
                console.log(`New pairing: ${spareWomen.dequeue()} with ${dancer.name}`)
            } else {
                spareMen.enqueue(dancer.name)
            }
        }
    })

    console.log('Unmatched women:');
    display(spareWomen);
    console.log('Unmatched men:');
    display(spareMen);
}

const danceArr = [
    {
        sex: 'F',
        name: 'Jane'
    },
    {
        sex: 'M',
        name: 'Frank'
    },
    {
        sex: 'M',
        name: 'John'
    },
    {
        sex: 'M',
        name: 'Sherlock'
    },
    {
        sex: 'F',
        name: 'Madonna'
    },
    {
        sex: 'M',
        name: 'David'
    },
    {
        sex: 'M',
        name: 'Christopher'
    },
    {
        sex: 'F',
        name: 'Beyonce'
    },
]


// DRILL 10

// Customers are just a boolean value: true if paperwork is complete, false if not (25% of the time)
function addCustomer(q) {
    const percentage = Math.random() * 100;
    const customer = (percentage >= 25) ? true : false;
    console.log('new customer: ', customer);
    q.enqueue(customer);
}

function helpCustomer(q) {
    // new customer comes out of the queue
    const currentCust = q.dequeue();
    console.log('just helped: ', currentCust)

    // if the customer's paperwork is incomplete, they go to the end of the line and have a new chance to be complete
    // I am repeating code here which is bad, I just wanted the console log to be different and didn't want to bother changing addCustomer
    if (currentCust === false) {
        const percentage = Math.random() * 100;
        const customer = (percentage >= 25) ? true : false;
        console.log('Back of the line! Customer is now: ', customer);
        q.enqueue(customer);
    }
}

function ophidianBank() {
    const nowWaiting = new Queue();

    // every 2 seconds, a new customer walks in
    const newCustomerInt = setInterval(addCustomer, 2000, nowWaiting);

    // every 3 seconds, the teller can help someone
    const nowHelpingInt = setInterval(helpCustomer, 3000, nowWaiting);

    // stop after 61 seconds & print the remaining queue
    setTimeout(() => {
        clearInterval(newCustomerInt);
        clearInterval(nowHelpingInt);
        console.log('All done!');
        display(nowWaiting);
    }, 61000);
}

ophidianBank()