const HashMap = require('./hashmap');

// DRILL 1

function main() {
    HashMap.MAX_LOAD_RATIO = 0.5;
    HashMap.SIZE_RATIO = 3;
    const lor = new HashMap();

    lor.set('Hobbit', 'Bilbo');
    lor.set('Hobbit', 'Frodo');
    lor.set('Wizard', 'Gandalf');
    lor.set('Human', 'Aragorn');
    lor.set('Elf', 'Legolas');
    lor.set('Maiar', 'The Necromancer');
    lor.set('Maiar', 'Sauron');
    lor.set('RingBearer', 'Gollum');
    lor.set('LadyOfLight', 'Galadriel');
    lor.set('HalfElven', 'Arwen');
    lor.set('Ent', 'Treebeard');

    console.log(lor);
    console.log('Hobbit value: ', lor.get('Hobbit'));
    console.log('Maiar value: ', lor.get('Maiar'));

    return lor;
}



WhatDoesThisDo();