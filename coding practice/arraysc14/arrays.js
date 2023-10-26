// Create an array

let fruits = ["apple", "mango", "orange", "banana"];
//.            0        1        2          3

// Accessing the elements of an array

console.log(fruits[2]); // output: orange
console.log(fruits[3]); // output: banana

// modify the elements of an array

fruits[1] = "grapes";
console.log(fruits); // output: [ 'apple', 'grapes', 'orange', 'banana' ]

// addind elements to an array

fruits.push("watermelon"); // adds to the end of the array
console.log(fruits); // output: [ 'apple', 'grapes', 'orange', 'banana', 'watermelon' ]

// Adding elements to the beginning of an array

fruits.unshift("strawberry"); // adds to the beginning of the array
console.log(fruits); // output: [ 'strawberry', 'apple', 'grapes', 'orange', 'banana', 'watermelon' ]

// Removing the last element of an array

fruits.pop(); // removes the last element of the array
console.log(fruits); // output: [ 'strawberry', 'apple', 'grapes', 'orange', 'banana' ]

// we will iterate over the array using for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
