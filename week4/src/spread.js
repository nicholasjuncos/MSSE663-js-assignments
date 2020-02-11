"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
// #1 Array copying
exports.numbers = [1, 2, 3, 4, 5];
exports.originalNumbers = exports.numbers.map(function (number) { return number; });
console.log(exports.originalNumbers);
// refactor here
exports.copiedArray = __spreadArrays(exports.originalNumbers);
console.log('1. copiedArray: ', exports.copiedArray);
// #2 Combining arrays
exports.winners = ['first'];
exports.runnerUps = ['second', 'third', 'fourth', 'fifth'];
exports.runnerUps2 = ['second', 'third', 'fourth', 'fifth'];
// Unshift adds 'first' to runnerUps via unshift, so it is necessary to make a duplicate for the refactor.
// Simply assigning runnerUps2 = runnerUps does not work for copying. unshift will add 'first' to runnerUps2 as well
exports.originalContenders = exports.runnerUps.unshift(exports.winners[0]);
console.log(exports.originalContenders);
exports.combinedArray = __spreadArrays(exports.winners, exports.runnerUps2);
console.log('2. combinedArray: ', exports.combinedArray);
// #3 Combining objects
exports.bob = {
    man: 'Bob'
};
exports.kyle = {
    boy: 'Kyle'
};
exports.originalPersons = Object.assign(exports.bob, exports.kyle);
console.log(exports.originalPersons);
exports.combinedObjects = __assign(__assign({}, exports.bob), exports.kyle);
console.log('3. combinedObjects: ', exports.combinedObjects);
// #4 Modifying values in arrays of objects
exports.data = [
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
exports.update = {
    id: 1,
    task: 'Do the other thing... again'
};
exports.originalUpdates = exports.data.map(function (task) {
    if (task.id === exports.update.id) {
        return Object.assign(task, exports.update);
    }
    return task;
});
console.log(exports.originalUpdates);
exports.modifiedArrays = function (update) {
    var data = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        data[_i - 1] = arguments[_i];
    }
    data[update.id] = update;
    return data;
};
console.log('4. modifiedArrays: ', exports.modifiedArrays.apply(void 0, __spreadArrays([exports.update], exports.data)));
