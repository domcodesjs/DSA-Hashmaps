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

main();

// 1.a - The values for Maiar is Sauron and for Hobbit is Frodo. There isn't a seperate value for the duplicate keys because the the hash map only accepted one key for each and not both.

// 1.b - The capacity of the hash table is 24 because we went over the intial capacity of 8 and the hash map resized by multiplying by the SIZE_RATIO of 3.
