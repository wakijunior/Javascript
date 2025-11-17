
// 1. Write if…else to print:
// "Empty" if string length is 0
// "Short" if 1–5 characters
// "Medium" if 6–10 characters
// "Long" if more than 10 characters

let str = prompt("Enter a string:");
if (str.length === 0) {
    console.log("Empty");
} 
else if (str.length >= 1 && str.length <= 5) {
    console.log("Short");
}
else if (str.length >= 6 && str.length <= 10) {
    console.log("Medium");
}
else {
    console.log("Long");
}

// 2. Write a program that calculates the ticket price 
// based on age with the following conditions: age below
// 12 pay a ticket price of 5, age below 18 pay a ticket 
// price of 10, age below 60 pay a ticket price of 20,
// age over 60 play a ticket price of 15.

let age = Number(prompt("Enter your age:"));
let ticketPrice;   
if (age < 12) {
    ticketPrice = 5;
}   
else if (age >= 12 && age < 18) {
    ticketPrice = 10;
}
else if (age >= 18 && age < 60) {
    ticketPrice = 20;
}
else {
    ticketPrice = 15;
}   
console.log(`The ticket price is Ksh. ${ticketPrice}`);


// 3.Write a program that calculates a discount based on the
//  purchase amount.Prices equal or over 100 discount have a 
//  discount of 20. Prices equal or over 50 have a discount of 10.
// Otherwise discount is 0

let purchaseAmount = Number(prompt("Enter the purchase amount:"));
let discount;   
if (purchaseAmount >= 50) {
    if (purchaseAmount >= 100) {
        discount = 20;
    }else {
        discount = 10;
    }

}else{
    discount = 0;
}
console.log(`The discount is Ksh. ${discount}`);


// 4.Write an if…else that prints "Match" if a variable val is the 
// number 5 or the string "5", but does not match "05" or 5.0.

let val = prompt("Enter a value:");
if (val === 5 || val === "5") {
    console.log("Match");
} else {
    console.log("No Match");
}


// 5.Given a variable str, write an if…else that prints:
// "Empty" if it’s an empty string or whitespace only
// "Number" if it can be converted to a number (e.g., "123")
// "Text" otherwise

let str2 = prompt("Enter a string:");
if (str2.trim() === "") {
    console.log("Empty");   
} else if (!isNaN(Number(str2))) {
    console.log("Number");
} else {
    console.log("Text");
}


// 6.Write if…else to handle a variable num such that:
// Print "Integer" if it’s a whole number
// Print "Float" if it’s a number but has decimals
// Print "Not a number" otherwise

let num = Number(prompt("Enter a number:"));
if (Number.isInteger(num)) {
    console.log("Integer");
}else if (Number.isdecimal(num)){
    console.log("Float");
}else {
    console.log("Not a number");
}


// 7.Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let month = prompt("Enter a month:").toLowerCase();
let season; 
if (month === "september" || month === "october" || month === "november") {
    season = "Autumn";
}   
else if (month === "december" || month === "january" || month === "february") {
    season = "Winter";
}   
else if (month === "march" || month === "april" || month === "may") {
    season = "Spring";
}
else {
    season = "Summer";
}   
console.log(`The season is ${season}`);


// 8.Write a JavaScript that takes 3 numeric inputs and outputs them
// in ascending order from smallest to largest

let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let num3 = Number(prompt("Enter third number:"));   

if (num1 <= num2 && num1 <= num3) {
    if (num2 <= num3) {
        console.log(`${num1}, ${num2}, ${num3}`);   
    } else {
        console.log(`${num1}, ${num3}, ${num2}`);   
    }
} else if (num2 <= num1 && num2 <= num3) {
    if (num1 <= num3) {
        console.log(`${num2}, ${num1}, ${num3}`);
    } else {
        console.log(`${num2}, ${num3}, ${num1}`);
    }
} else {
    if (num1 <= num2) {
        console.log(`${num3}, ${num1}, ${num2}`);   
    } else {
        console.log(`${num3}, ${num2}, ${num1}`);   
    }
// 9.Write a program to check whether the last digit entered by a user is divisible by 3 or not.

let userInput = Number(prompt("Enter a number:"));
let lastDigit = userInput.slice(-1);
if (lastDigit % 3 == 0) {
    console.log(`The last digit ${lastDigit} is divisible by 3`);
} else 
    console.log("The last digit is not divisible by 3")
