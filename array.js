let numbers = [1,2,3,4,"five","six","true",[7,8,9]]
console.log(numbers)
console.log(typeof(numbers))
console.log(Array.isArray(numbers))

// accessing array

console.log(numbers[3])
console.log(numbers[7][2])

// updating or modifying a ray value
let names = ["Henry", "Jane", "Sophie"]

names[1] = "Suzzy"

console.log(names)
console.log(names.length)
console.log(numbers.length)

//adding items at the end of an array
names.push("Morgan", "Edwin")
console.log(names)

// adding items at the beginning of an array.
names.unshift("Esther", "Eunice")
console.log(names)

//removing items at the end
names.pop()

//removing items at the beginning
names.shift()
console.log(names)

// splice() to remove elements
let newarray = [1,2,3,"James",false,300,800]
newarray.splice(2,1) //this removes element on index 2 and removes only 1 element.

//splice adding elements without deleting
newarray.splice(3,0,"John","Mary")
console.log(newarray)

//splice to replace elements
newarray.splice(6,2,1000,2000)
console.log(newarray)

//.slice() searches the first item for its first occurrence and returns its index
let data = ["python","js", 235, 400,"flask"]
data.slice(1,4)
console.log(data)

//.indexof() returns the index of an element
console.log(data.indexOf(python))

//lastindexof() searches an element in an array starting from the end and returns its index
console.log(data.indexOf(400))

//includes()
console.log(data.includes(235))

//sort() arranges elements in an array in an ascending order.
data = data.sort()
console.log(data)

//.reverse() changes the order of an array so that first becomes last and vice versa
data = data.reverse()
console.log(data)

//.join() joins array elements to form a string
console.log(data.join(""))

// .tostring() converts an array into a comma separated string

// .copywithin() copies a portion of an array within the same array
// y.copywithin(target,start,end)

//.at() returns the value at a given position. it allows negative indexing