"use strict";
exports.__esModule = true;
var Item = /** @class */ (function () {
    function Item(name, price) {
        this.name = name;
        this.price = price;
        this.name = name;
        this.price = price;
    }
    return Item;
}());
exports.Item = Item;
var CheckoutCart = /** @class */ (function () {
    function CheckoutCart(id, name) {
        this.id = id;
        this.name = name;
        this.items = Array();
        this.id = id;
        this.name = name;
        this.total = 0.00;
    }
    CheckoutCart.prototype.addItem = function (x) {
        var size = this.items.length;
        this.items.push(x);
        this.total = this.getTotal();
        return this.items.length > size;
    };
    CheckoutCart.prototype.getItems = function () {
        return this.items;
    };
    CheckoutCart.prototype.getTotal = function () {
        var total = 0;
        var items = this.getItems();
        items.forEach(function (item) {
            total += item.price;
        });
        return total;
    };
    return CheckoutCart;
}());
exports.CheckoutCart = CheckoutCart;
var cart1 = new CheckoutCart(1, 'testman');
var item1 = new Item("Carrots", 1.50);
console.log(cart1.id, cart1.name, cart1.total);
console.log(cart1.addItem(item1));
console.log(cart1.getItems());
console.log(cart1.getTotal());
