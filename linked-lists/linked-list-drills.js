const LinkedList = require('./linked-list.js');

function drill2() {
    let SLL = new LinkedList();
    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');

    SLL.insertLast('Tauhida');
    SLL.remove('Husker');

    SLL.insertBefore('Boomer', 'Athena');
    SLL.insertAfter('Helo', 'Hotdog');
    SLL.insertAt(3, 'Kat');
    SLL.remove('Tauhida');

    console.log(SLL);
}

drill2();