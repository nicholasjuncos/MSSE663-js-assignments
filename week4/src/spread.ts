// #1 Array copying
export const numbers = [1, 2, 3, 4, 5];

export const originalNumbers = numbers.map(number => number);
console.log(originalNumbers);

// refactor here
export const copiedArray = [...originalNumbers];
console.log('1. copiedArray: ', copiedArray);

// #2 Combining arrays
export const winners = ['first'];
export const runnerUps = ['second', 'third', 'fourth', 'fifth'];
export const runnerUps2 = ['second', 'third', 'fourth', 'fifth'];
// Unshift adds 'first' to runnerUps via unshift, so it is necessary to make a duplicate for the refactor.
// Simply assigning runnerUps2 = runnerUps does not work for copying. unshift will add 'first' to runnerUps2 as well

export const originalContenders = runnerUps.unshift(winners[0]);
console.log(originalContenders);

export const combinedArray = [...winners, ...runnerUps2];

console.log('2. combinedArray: ', combinedArray);

// #3 Combining objects
export const bob = {
  man: 'Bob'
};

export const kyle = {
  boy: 'Kyle'
};

export const originalPersons = Object.assign(bob, kyle);
console.log(originalPersons);

export const combinedObjects = {...bob, ...kyle};
console.log('3. combinedObjects: ', combinedObjects);

// #4 Modifying values in arrays of objects
export const data = [
  {
    id: 0,
    task: 'Do the thing'
  },
  {
    id: 1,
    task: 'Do the other thing'
  },
  {
    id: 2,
    task: 'Do the last thing'
  }
];

export const update = {
  id: 1,
  task: 'Do the other thing... again'
};

export const originalUpdates = data.map(task => {
  if (task.id === update.id) {
    return Object.assign(task, update);
  }
  return task;
});

console.log(originalUpdates);

export const modifiedArrays = (update: any, ...data: any) => {
  data[update.id] = update;
  return data;
};

console.log('4. modifiedArrays: ', modifiedArrays(update, ...data));
