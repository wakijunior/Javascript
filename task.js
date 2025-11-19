// let num = Number(prompt("Enter a number:"));
// if (typeof(num) != "number"){
//     console.log("Not a number");
// }else if (Number.isInteger(num)){
//     console.log("integer")
// }else {
//     console.log("Float")
// } 



let value = prompt("Enter a value")
if(typeof(Number(value)) != "number"){
    console.log("Not a number-input numbers only")
}else if((value.slice(-1))%3 == 0){
    console.log("Last digit divisible by 3")
}else{
    console.log("Last digit not divisible by 3")
}
