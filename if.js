// write a js program that checks if a number is odd or even

let num = Number(prompt("Enter a number: "))

if (num % 2 == 0){
    console.log(`${num} is even`) 
}else{
    console.log(`${num} is even`)
}

// Write a js program that displays the largest interger among three intergers.

let num1 = Number(prompt("Enter a whole number: "))
let num2 = Number(prompt("Enter a whole number: "))
let num3 = Number(prompt("Enter a whole number: "))

if ((num1 > num2) && (num1 > num3)){
    console.log(`${num1} is the largest`)
}else if ((num2 > num1) && (num2> num3)){
    console.log(`${num2} is the largest`)
}else{
    console.log(`${num3} is the largest`)
}

let num4 = Number(prompt("Enter a number: "))
let checkeven = (num4 % 2 == 0) ? "even" : "odd"

// Using ternary operator (?) determine wether a person is eligible to vote criteria
// anyone voting should be 18 years and above

let age = Number(prompt("Enter your age: "))

let agechecker = (age >= 18) ? "you are eligible to vote" : "you are ineligible"
console.log(agechecker)