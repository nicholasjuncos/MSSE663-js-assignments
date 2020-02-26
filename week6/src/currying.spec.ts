import { expect } from 'chai';
import 'mocha';
import {
  curryFunction,
  curryMathFunction,
  curryMe,
  doMath,
  ninjaBlackBeltFunction,
  ninjasOne, ninjaStatusFunction,
  ninjasTwo, statusTypes
} from "./currying";

describe('Currying tests', () => {
  it('#1 should output the same result as the original function', () => {
    const curryArray = curryFunction('a')('b')('c');
    expect(curryArray).to.be.eql(curryMe('a', 'b', 'c'));
    console.log(curryArray);
  });

  it('#2 should output the same result as the original function', () => {
    const curryMath = curryMathFunction(1)(2)(3);
    expect(curryMath).to.eql(doMath(1)(2)(3)).to.eql(0);
    console.log(curryMath);
  });

  it('#3 should return an array containing the ninjas who have a black belt', () => {
    const ninjaArray = ninjaBlackBeltFunction(ninjasOne)(ninjasTwo);
    ninjaArray.every(i => expect(i).to.have.nested.property('belt', 'black'));
    console.log(ninjaArray);
  });

  it('#4 should return a new array of ninja objects with "status" added to each object', () => {
    const ninjaArray = ninjaStatusFunction(ninjasOne)(ninjasTwo)(statusTypes);
    expect(ninjaArray).to.be.an('array');
    ninjaArray.every(i => expect(i).to.have.all.keys('belt', 'name', 'status'));
    console.log(ninjaArray);
  });
});
