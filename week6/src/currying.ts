// #1 Convert this javascript function to a curried function
export function curryMe(string1: string, string2: string, string3: string): string {
  return string1 + ' ' + string2 + ' ' + string3;
}

export const curryFunction = (string1: string) => (string2: string) => (string3: string) => {
  return [string1,string2,string3].join(' ')
}

// #2 Hoist and convert nested functions to curried functions
export function doMath(a) {
  return function add(b) {
    return function subtract(c) {
      return a + b - c;
    };
  };
}

export function addFunction(a: number, b: number) {
  return a + b;
}

export function subtractFunction(a: number, b: number) {
  return a - b;
}

export const curryMathFunction = (a: number) => (b: number) => (c: number) => {
  return subtractFunction(addFunction(a, b), c);
};

// #3 Write a curried function that returns an array containing the ninjas who have a black belt
export const ninjasOne = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Leonardo', belt: 'black' },
  { name: 'Mr. Miyagi', belt: 'black' },
  { name: 'Rocky', belt: 'black' },
  { name: 'Colt', belt: 'green' },
  { name: 'Tum Tum', belt: 'white' },
  { name: 'Haru', belt: 'white' },
  { name: 'The Bride', belt: 'black' },
  { name: 'Cammy', belt: 'black' },
  { name: 'Wong Fei-hung', belt: 'green' }
];

export const ninjasTwo = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Jim', belt: 'black' },
  { name: 'The Rat', belt: 'black' }
];

export interface NinjaObj{
  name:string,
  belt:string
}

export const ninjaBlackBeltFunction = (ninjas1: Array<NinjaObj>) => (ninjas2: Array<NinjaObj>) => {
  let combinedArray = ninjas1.concat(ninjas2);
  return combinedArray.filter(ninja => beltFilter(ninja, 'black'));
};

export const beltFilter = (ninja: NinjaObj, belt: string) => {
  return (ninja.belt == belt);
};

/**
 * #4 Write a curried function that returns a new array of ninja objects with "status" added to each object.
 * The status should be the value of whatever key in the status object matches the ninja's belt.
 *
 * @example { name: 'Colt', belt: 'green', status: 'warrior' }
 */

export const statusTypes = {
  white: 'grasshopper',
  green: 'warrior',
  black: 'sensei'
};

export const gamerStatusTypes = {
  white: 'Noob',
  green: 'Choob',
  black: 'Legend'
};

export interface statusObj {
  white: string,
  green: string,
  black: string
}

export const ninjaStatusFunction = (ninjas1: Array<NinjaObj>) => (ninjas2: Array<NinjaObj>) => (types: statusObj) => {
  let combinedArray = ninjas1.concat(ninjas2);
  combinedArray.map( x => {
    x['status'] = types[x.belt];
  });
  return combinedArray;
};
