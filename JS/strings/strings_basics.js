let day = "Friday Fun "

console.log("*******************typeof*******************")
console.log(typeof(day))

console.log("*******************length*******************")
console.log(day.length)

console.log("*******************slice*******************")
console.log(day.slice(0, 3))

console.log("*******************index*******************")
console.log(day[0])
console.log(day[1])
console.log(day[2])
console.log(day[3])
console.log(day[4])
console.log(day[5])
console.log(day[6])
console.log(day[7])

console.log("*******************split*******************")
let result = day.split(' ')
console.log(result[0])
console.log(result[1])

console.log("*******************trim()*******************")
console.log(day.trim())
console.log(day.trim().length)

console.log("*******************parseInt()*******************")
let date = "23"
let nextDate = "27"
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff)

console.log("*******************toString()*******************")
console.log(typeof(diff.toString()))

console.log("*******************String Concatination*******************")
day = "Monday"
let newQuote = day+" is Funday"
console.log(newQuote)

//Monday is Funday
//0123456789012345
console.log("*******************indexOf()*******************")
console.log(newQuote.indexOf("day", 4))

console.log("*******************Occurances of substring*******************")
day = "Tuesday is Funday "
let count = 0
let value = day.indexOf("day")
while(value != -1){    
    count++
    value = day.indexOf("day", value + 1)
}
console.log(count)