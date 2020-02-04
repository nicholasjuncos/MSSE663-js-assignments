import { expect } from 'chai';
import { of,} from 'rxjs';
import 'mocha';
import {CheckoutCart, Item} from './app'

describe('Test for observable.ts', () =>{
    const cart1 = new CheckoutCart( 1, 'Testman1');
    const item1 = new Item('Carrots', 1.50);
    const cart2 = new CheckoutCart(2, 'Testman2');
    cart1.addItem(item1);
    let cartArr = [cart1, cart2];
    const carts = of(cartArr);

    it('should assert the carts in the right order', () =>{
        carts.subscribe(item => {
            expect(item).to.equal(cartArr);
        });
    });

    const cart3 = new CheckoutCart(3, 'Testman3');
    cartArr.push(cart3);

    it('should assert the carts in the right order', () =>{
        carts.subscribe(item => {
            expect(item).to.equal(cartArr);
        });
    })
});
