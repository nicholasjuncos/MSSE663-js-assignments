// #1 Object Destructuring
export const object = { name: 'elvis', title: 'hip swinger' };

export const { name: person, title: job } = object;

// Assign variables using ES6 so that we get (note, you cannot just make a completely new object):
console.log(person); // 'elvis'
console.log(job); // 'hip swinger'

// #2 Object Matching: Nested destructuring
export const nestedObject = {
  user: 'elvis',
  address: {
    city: 'denver',
    state: 'colorado'
  },
  id: 1
};

export const { user: user, address: address, id: id } = nestedObject;

// expected results:
console.log(user); // 'elvis'
console.log(address); // { city: 'denver', state: 'colorado' }
console.log(id); // 1

// #3 Create a new object given the destructed values above

export const newObject = { user: user, address: address, id: id };
console.log(newObject);

// #4 Object with key value pairs: construct a statement
export const { greeting, name } = { greeting: 'hello', name: 'taylor' };

export const statement = ( greeting + ", " + name + "!");

// expected result: 'hello, taylor!'
console.log(statement);
