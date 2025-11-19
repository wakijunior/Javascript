/*Assignment 
1: Create an Array
Create an array named colors with the following elements: 'red', 'green', 'blue'.*/

let colors = ["red", "green", "blue"];

/*Assignment 2: Access and Modify Array Elements
Given the array colors, access the second element and change it to 'pink'. 
Then, display the modified array.*/

colors.splice(1, 1, "pink");
console.log(colors);

/*Assignment 
3: Determine the Length of an Array
Given the array colors, determine its length and store it in a variable lengthOfColors. 
Then, display lengthOfColors.*/

let lengthOfColors = colors.length;
console.log(lengthOfColors);


/*Assignment 
4: Use .pop() Method
Given the array colors, use the .pop() method to remove the last element from the array. 
Then, display the modified array.*/

colors.pop();
console.log(colors);
