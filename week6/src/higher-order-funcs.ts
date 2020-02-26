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
export const things = ['thing1', 'thing2'];

export const objectFunction = (element: string) => {
    let name = element.slice(0, element.length-1);
    let id = Number(element.slice(element.length-1));
    return {id, name};
};

export const objectArrayFunction = (arr: Array<string>) => {
    return arr.map(element => objectFunction(element));
};

/**
 * #2 Higher order then curry.
 *
 * - Write a function that accepts a key as a string.
 * - Filter the results from #1 to return a single `thing` object.
 * - Hoist that filter callback and curry all functions.
 */

export interface thingObject {
    id: number,
    name: string
}

export const thingFunction = (key: string) => {
    let objectArray = objectArrayFunction(things);
    let newKey = Number(key);
    return objectArray.filter(element => thingFilter(element, newKey));
};

export const thingFilter = (thing: thingObject, key: number) => {
    return (thing.id == key);
};
