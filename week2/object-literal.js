/**
 * #1 Create an object literal named `monkey`
 * #2 Give it 3 unique properties
 * #3 Give it at least 2 behaviours/methods of your choice
 * #4 Calls the object's method(s) and output a result of your choice to the console.
 * #5 Convert the object literal to an Class
 * #6 Then call its method and output to the console.
 */

let monkey = {
    name: "Reggie",
    age: 15,
    gender: "M",
    breed: "Orangutan",
    getBreed: function() {
        return this.breed;
    },
    getAgeString: function() {
        return this.age.toString();
    }
};

console.log(monkey.getBreed());
console.log(monkey.getAgeString());

class Monkey {
    name;
    age;
    gender;
    breed;

    constructor(name, age, gender, breed) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
    }

    getName() {
        return this.name;
    };
    getAgeString() {
        return this.age.toString();
    };
    getGender() {
        if (this.gender.toUpperCase() === 'M') { return 'Male' }
        if (this.gender.toUpperCase() === 'F') { return 'Female' }
        return this.gender;
    };
    getBreed() {
        return this.breed;
    };
}

let testMonkey = new Monkey('James', 13, 'm', 'Chimp');
console.log(testMonkey);
console.log(testMonkey.getName());
console.log(testMonkey.getAgeString());
console.log(testMonkey.getGender());
console.log(testMonkey.getBreed());
