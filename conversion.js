console.log("text")

//string to number conversion
let num = "23.5"

let x = Number(num)
let y = parseFloat(num)
let z = parseInt(num)

console.log(num,typeof(num))
console.log(x,typeof(x))
console.log(y,typeof(y))
console.log(z,typeof(z))

//number to a string
let a = 578
let b = String(a)
let c = a.toString()

console.log(a,typeof(a))
console.log(b,typeof(b))
console.log(c,typeof(c))

//type coercion
let value1 = 5
let value2 = "12"
console.log(value1 * value2)