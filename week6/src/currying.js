"use strict";
exports.__esModule = true;
// #1 Convert this javascript function to a curried function
function curryMe(string1, string2, string3) {
    return string1 + ' ' + string2 + ' ' + string3;
}
exports.curryMe = curryMe;
exports.curryFunction = function (string1) { return function (string2) { return function (string3) {
    return [string1, string2, string3].join(' ');
}; }; };
// #2 Hoist and convert nested functions to curried functions
function doMath(a) {
    return function add(b) {
        return function subtract(c) {
            return a + b - c;
        };
    };
}
exports.doMath = doMath;
function addFunction(a, b) {
    return a + b;
}
exports.addFunction = addFunction;
function subtractFunction(a, b) {
    return a - b;
}
exports.subtractFunction = subtractFunction;
exports.curryMathFunction = function (a) { return function (b) { return function (c) {
    return subtractFunction(addFunction(a, b), c);
}; }; };
// #3 Write a curried function that returns an array containing the ninjas who have a black belt
exports.ninjasOne = [
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
exports.ninjasTwo = [
    { name: 'Michelangelo', belt: 'white' },
    { name: 'Donatello', belt: 'green' },
    { name: 'Raphael', belt: 'black' },
    { name: 'Jim', belt: 'black' },
    { name: 'The Rat', belt: 'black' }
];
exports.ninjaBlackBeltFunction = function (ninjas1) { return function (ninjas2) {
    var combinedArray = ninjas1.concat(ninjas2);
    return combinedArray.filter(function (ninja) { return exports.beltFilter(ninja, 'black'); });
}; };
exports.beltFilter = function (ninja, belt) {
    return (ninja.belt == belt);
};
/**
 * #4 Write a curried function that returns a new array of ninja objects with "status" added to each object.
 * The status should be the value of whatever key in the status object matches the ninja's belt.
 *
 * @example { name: 'Colt', belt: 'green', status: 'warrior' }
 */
exports.statusTypes = {
    white: 'grasshopper',
    green: 'warrior',
    black: 'sensei'
};
exports.gamerStatusTypes = {
    white: 'Noob',
    green: 'Choob',
    black: 'Legend'
};
exports.ninjaStatusFunction = function (ninjas1) { return function (ninjas2) { return function (types) {
    var combinedArray = ninjas1.concat(ninjas2);
    combinedArray.map(function (x) {
        x['status'] = types[x.belt];
    });
    return combinedArray;
}; }; };
