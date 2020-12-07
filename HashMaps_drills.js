const HashMap = require('./HashMap');

const main = () => {
  let hm = new HashMap();
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;
  hm.set('Hobbit', 'Bilbo');
  hm.set('Hobbit', 'Frodo');
  hm.set('Wizard', 'Gandolf');
  hm.set('Human', 'Aragon');
  hm.set('Elf', 'Legolas');
  hm.set('Maiar', 'The Necromancer');
  hm.set('Maiar', 'Sauron');
  hm.set('RingBearer', 'Gollum');
  hm.set('LadyOfLight', 'Galadriel');
  hm.set('HalfElven', 'Arwen');
  hm.set('Ent', 'Treebeard');

  console.log('Hash Map Length:', hm.length);
  console.log('Get Hobbit:', hm.get('Hobbit'));
  console.log('Get Maiar:', hm.get('Maiar'));
  console.log('Hash Map Capacity:', hm._capacity);
};

// main();

// 1.a - The values for Maiar is Sauron and for Hobbit is Frodo. There isn't a seperate value for the duplicate keys because the the hash map only accepted one key for each and not both by replacing the duplicate key value with the most recent key value.

// 1.b - The capacity of the hash table is 24 because we went over the intial capacity of 8 and the hash map resized by multiplying by the SIZE_RATIO of 3.

const WhatDoesThisDo = () => {
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};

// WhatDoesThisDo();

// 2 - This will output 20 and 10 because it will replace the duplicate key values with the most recent key values.

function removeDuplicates(string) {
  const hm = new HashMap();
  let result = '';

  for (let i = 0; i < string.length; i++) {
    hm.set(string[i], string[i]);
  }

  for (let i = 0; i < hm._hashTable.length; i++) {
    if (hm._hashTable[i] !== undefined) {
      result += hm._hashTable[i].value;
    }
  }

  console.log(result);
}
removeDuplicates('google'); // => gole
