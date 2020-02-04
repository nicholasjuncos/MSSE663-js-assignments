"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var app_1 = require("./app");
var cart1 = new app_1.CheckoutCart(1, 'Testman1');
var cart2 = new app_1.CheckoutCart(2, 'Testman2');
var carts = rxjs_1.of([cart1, cart2]);
carts.subscribe(function (item) { return console.log(item); });
