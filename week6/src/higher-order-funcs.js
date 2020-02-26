"use strict";
exports.__esModule = true;
/**
 * #1 Higher order things.
 *
 * - Map the values to produce the result:
 *
 * [{ id: 1, name 'thing' }, { id: 2, name 'thing' }]
 *
 * - Then Hoist the callback function.
 *
 */
exports.things = ['thing1', 'thing2'];
exports.objectFunction = function (element) {
    var name = element.slice(0, element.length - 1);
    var id = Number(element.slice(element.length - 1));
    return { id: id, name: name };
};
exports.objectArrayFunction = function (arr) {
    return arr.map(function (element) { return exports.objectFunction(element); });
};
exports.thingFunction = function (key) {
    var objectArray = exports.objectArrayFunction(exports.things);
    var newKey = Number(key);
    return objectArray.filter(function (element) { return exports.thingFilter(element, newKey); });
};
exports.thingFilter = function (thing, key) {
    return (thing.id == key);
};
