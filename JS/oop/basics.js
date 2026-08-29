//Object is collection of properties

let person = {

    firstName : 'Vishvam',
     lastName : 'Javagal',
          age : 18,
     fullName : function() {
       return this.firstName + this.lastName
    }
}

console.log(person.firstName)
console.log(person['firstName'])


console.log(person.lastName)
console.log(person['lastName'])

console.log(person.age)
console.log(person['age'])

console.log(person.fullName())
console.log(person['fullName']())

person.firstName = "Vishvambruth"
console.log(person.firstName)



person.gender = 'Male'
console.log(person)

delete person.gender
console.log(person)

console.log('gender' in person)

for (let key in person){
    if(key == "fullName"){
        console.log(key)
        console.log(person[key]())
    }else{
        console.log(key)
        console.log(person[key])
    }    
}