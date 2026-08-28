//Block of code
console.log("********************Normal Function***********************")
function add(a, b){
    return a+b
}

let sum = add(2,3)
console.log(sum)

//Anonymous Functions => Do not have name -- Function expressions
console.log("********************Anonymous Functions***********************")
let sumOfIntegers = (c, d) => c+d
console.log(sumOfIntegers(2, 3))