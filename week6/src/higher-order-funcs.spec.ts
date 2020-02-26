import {expect} from 'chai';
import 'mocha';
import {objectArrayFunction, things, thingFunction} from "./higher-order-funcs";

describe('Higher Order Function tests', () => {
    it("#1 should produce the expected result `[{ id: 1, name 'thing' }, { id: 2, name 'thing' }]` after hoisting", () => {
        const result = objectArrayFunction(things);
        console.log(result);
        expect(result).to.eql([{id: 1, name: 'thing'}, {id: 2, name: 'thing'}]);
    });

    it('#2 should return a single thing from array of things objects after hoisting and currying', () => {
        const thing1 = thingFunction('1');
        console.log(thing1);
        expect(thing1).to.eql([{id: 1, name: 'thing'}]);
    });
});
