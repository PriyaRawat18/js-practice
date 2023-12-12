let score = "33"
console.log(typeof score);          //string

let valueInNumber = Number(score)
console.log(typeof valueInNumber)   //number

//let's experiment

let marks = "98abc"
console.log(typeof marks)           //string

let valueInNumberr = Number(marks)
console.log(typeof valueInNumberr)  //number
console.log(valueInNumberr)         //NaN -> not a number(keep this in mind while development)

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn) //true 
console.log(booleanIsLoggedIn)