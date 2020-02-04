"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
exports.sourceValue = 10;
exports.stream = rxjs_1.of(exports.sourceValue);
exports.stream.subscribe(function (val) {
    console.log(val);
});
