import { expect } from 'chai';
import 'mocha';
import {CheckoutCart, Item} from "./app";

describe('Testing app.ts', () => {
    const cart1 = new CheckoutCart(1, 'testman');
    const item1 = new Item('Carrots', 1.50);

    it('should output cart user\'s name', () => {
        expect(cart1.name).to.equal('testman');
    });

    it('should output cart id', () => {
        expect(cart1.id).to.equal(1);
    });

    it('should output item name', () => {
        expect(item1.name).to.equal('Carrots');
    });

    it('should output item price', () => {
        expect(item1.price).to.equal(1.50);
    });

    it('should output true when adding item to cart', () => {
        expect(cart1.addItem(item1)).to.equal(true);
    });

    it('should output class added to items in cart', () => {
        expect(cart1.getItems()[0]).to.equal(item1);
    });

    it('should output cart total of 1.50', () => {
        expect(cart1.getTotal()).to.equal(1.50);
    });
});
