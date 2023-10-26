// loops code alone

///arrays animal

var zooanimals = ["zebra", "owl", "rhino", "giraffe"];


// for loop

for ( var i = 0; i < zooanimals.length; i++ ){
    console.log(zooanimals[i]);
}

// for loop from number 0 to 4


for (let i = 0; i <= 5; i++){
    console.log("c14 is the best" +i)
}

/// to while loop

console.log("c14 is the best");
console.log("c14 is the best");
console.log("c14 is the best");
console.log("c14 is the best");
console.log("c14 is the best");
console.log("c14 is the best");

// array  of a fram
let farm =["cow", "pig", "horse", "dog"];


// var for holding the array lenght

let farmLength = farm.length;

for (var j = 0; j < farmLength; j++) {
  console.log( farm + [j] );



//IF the first character 

if(farm[j].charAt(0) ==="c" || farm[j].charAt(0) === "o") {
    alert("start with c or o! ");
}}