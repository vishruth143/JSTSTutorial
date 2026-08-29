//Inheritance is the main pillar in object oriented programming
//One class can inherit/acquire the properties, methods of another class
//The class which inherits the properties of aother is known as subcalss (derived class, child class)
//The calss whose properties are inherited is know as superclass

const Person = require("./classes");


class Pet extends Person {
    constructor(firstname, lastname) {
        //Call parent class constructor
        super(firstname, lastname)
    }

    get location() {
        return "Bluecross"
    }
}

let pet = new Pet("Sam", "San")
console.log(pet.fullName())
console.log(pet.location)
