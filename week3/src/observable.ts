import { of } from 'rxjs';
import { CheckoutCart } from "./app";

const cart1 = new CheckoutCart(1, 'Testman1');
const cart2 = new CheckoutCart(2, 'Testman2');

const carts = of([cart1, cart2]);
carts.subscribe(item => console.log(item));
