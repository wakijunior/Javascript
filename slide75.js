// Create a new file called objectTask and attempt the below questions:
// my_object= [23, “Jane”, 560, [“Lesson”, “Maths”, {“currency” : “KES”}], 987, 76,”John”]
// Display:
// 1. KES
// 2. 560
// 3. Maths
// 4. In the object with the key currency, add another key “amount” with value 90
// 5. Reverse 987 to 789 without using an inbuilt -method or Assigning 789 manually.
//      Hint: arrays can be reversed using reverse() functions
// 6. Change the name “John” to “Jane” . 

let objectTask = [23, "Jane", 560, ["Lesson", "Maths", {"currency" : "KES"}], 987, 76,"John"];
console.log(objectTask[3][2]["currency"]);
console.log(objectTask[2]);
console.log(objectTask[3][1]);

//4.
objectTask[3][2].amount = 90;
console.log(objectTask);


//5.
let num = objectTask[4];
let num1 = num.toString().charAt(0);
let num2 = num.toString().charAt(1);
let num3 = num.toString().charAt(2);
num = Number(num3 + num2 + num1);
console.log(num);
console.log(typeof(num));

//6.
objectTask[6] = "Jane";
console.log(objectTask);