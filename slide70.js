// Assignment 1: Combine Arrays
// Given two arrays arr1 and arr2, combine them into a single array combinedArray 
// using the .concat() method. Then, remove the first element from combinedArray using 
// the .shift() method. Finally, display the modified combinedArray.

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
combinedArray = arr1.concat(arr2);
combinedArray.shift();
console.log(combinedArray); 


// Assignment 2: Extract Subarray
// Given an array “sourceArray”, extract a subarray “extractedArray” from index 2 
// to index 4 using the .slice() method. Then, modify the extractedArray by replacing 
// its elements with 'x', 'y', and 'z' using the .splice() method. Finally, display 
// both the sourceArray and the modified extractedArray.

sourceArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
extractedArray = sourceArray.slice(2, 5);
extractedarray = extractedArray.splice(0, 3, 'x', 'y', 'z');
console.log(extractedarray);
console.log(sourceArray);   
