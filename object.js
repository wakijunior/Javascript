let person ={
    "name":"Henry",
    "age":45,
    "address": "234 Biashara st",
    "married":true,
    "tech stack":["python","Go","Js"]
}
console.log(person)
console.log(typeof(person))
console.log(person.name)
console.log(person.address)
console.log(person["tech stack"])

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))