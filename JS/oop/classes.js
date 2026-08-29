// Classes got introduced in ES6
module.exports = class Person {
    //Class properties
    age  = 25;     

    //Getters
    get location(){
        return "Minnesota"
    }
    
    //Constructor is method which executes by default when you create an object of a class
    constructor(firstName, lastName){
        // Instance Variables
        this.firstName = firstName 
        this.lastName = lastName
    }

    //Methods
    fullName(){
        return this.firstName + this.lastName
    }
}

// let person = new Person("Tim", "Cook")
// let person1 = new Person("Chris", "Jones")

// console.log(person.age)
// console.log(person.location)
// person.fullName()
// person1.fullName()