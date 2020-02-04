
export class Item {
    constructor(public name: string, public price: number) {
        this.name = name;
        this.price = price;
    }
}

export interface Cart {
    id: number,
    name: string;
    total: number,
    items: Item[],
    addItem: (x:Item) => boolean,
    getItems: () => Item[],
    getTotal: () => number
}

export class CheckoutCart implements Cart {
    public items = Array<Item>();
    public total: number;
    constructor(public id: number, public name: string) {
        this.id = id;
        this.name = name;
        this.total = 0.00;
    }
    addItem(x: Item): boolean{
        const size = this.items.length;
        this.items.push(x);
        this.total = this.getTotal();
        return this.items.length > size;
    }
    getItems(): Item[]{
        return this.items;
    }
    getTotal(): number{
        let total = 0;
        const items = this.getItems();
        items.forEach((item) => {
            total += item.price;
        });
        return total;
    }
}

const cart1 = new CheckoutCart(1, 'testman');
const item1 = new Item("Carrots", 1.50);
console.log(cart1.id, cart1.name, cart1.total);
console.log(cart1.addItem(item1));
console.log(cart1.getItems());
console.log(cart1.getTotal());
