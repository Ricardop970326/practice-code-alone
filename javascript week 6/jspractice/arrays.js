// array

let fruits = ["apple", "mango", "orange", "banana"];
 //              0         1       2           3


 
console.log(fruits[2]);
console.log(fruits[3]);


fruits[1] = "grapes";
console.log(fruits)


fruits.push("watermelon");
console.log(fruits);/// ad at the end of the array



fruits.unshift("stramberry"); // add at the begening of the array
console.log(fruits);


//remove variable the lasp var
fruits.pop();
console.log(fruits)





// for loop
for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
}