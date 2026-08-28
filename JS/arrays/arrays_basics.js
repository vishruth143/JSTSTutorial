var marks =  Array(6)
var marks = new Array(124, 70, 68, 94, 82, 81)

var marks = [124, 70, 68, 94, 82, 81]

console.log("*****************Print Array using indexes**************************")
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5])
console.log(marks[6])
console.log(marks)

console.log("****************Sum of marks***************************")
let sum_of_marks = 0
for (let m=0; m<=marks.length-1;m++){
    sum_of_marks += marks[m]
}
console.log("Sum of marks: " + sum_of_marks)

console.log("****************Print Array using For loop***************************")
for (let i=0;i<marks.length;i++)
    console.log(marks[i])

//slice
console.log("********************slice***********************")
console.log(marks.slice(1, 5))


//length
console.log("********************length***********************")
console.log("Length of 'marks' array: "+marks.length)

//push
console.log("********************push***********************")
marks.push(100)
console.log(marks)

//pop
console.log("********************pop***********************")
marks.pop()
console.log(marks)

//unshift
console.log("********************unshift***********************")
marks.unshift(12)
console.log(marks)

marks.pop()
console.log(marks)

//indexOf
console.log("********************indexOf***********************")
console.log(marks.indexOf(124))

//includes
console.log("********************includes***********************")
console.log(marks.includes(94))

var array = [124, 70, 68, 94, 82, 81]

//reduce
console.log("********************reduce***********************")
let total = array.reduce((sum, mark)=>sum+mark, 0)
console.log(total)

console.log("**************************************************")
var scores = [12, 13, 14, 16]
var evenScores = []
for (i=0; i<scores.length; i++){
    if(scores[i]%2==0){
        evenScores.push(scores[i])
    }
}
console.log(evenScores)
console.log("**************************************************")

var numbers = [12, 13, 14, 16]

//filter
console.log("********************filter***********************")
evenNumbers = numbers.filter(score=>score%2==0)
console.log(evenNumbers)

//map
console.log("********************map***********************")
let mappedArray = evenNumbers.map(score=>score*3)
console.log(mappedArray)

console.log("**********************************************")
let totoalVal = mappedArray.reduce((sum,val)=>sum+val,0)
console.log(totoalVal)

console.log("**********************************************")
let scores1 = [12, 13, 14, 16]
let result = scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0)
console.log(result)

console.log("********************sort***********************")
let fruits = ["Banana", "Mango", "Pomegranate", "Apple"]
console.log(fruits.sort())
console.log(fruits.reverse())

console.log("*******************************************")
let test = [12, 0o3, 19, 16, 14] 
test.sort()
console.log(test)
test.sort((a,b)=>a-b)
console.log(test)
test.sort((a,b)=>b-a)
console.log(test)
console.log("*******************************************")
