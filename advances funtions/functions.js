/// function

//function calld 3 parameters

function adder(x,y,z){
    return x + y + z;
}

// multiplication funtion

function multiply (x,y,z){
    return x * y * z;
}

console.log(multiply(3,5,6));
console.log(adder(1,2,3));


//function called "isString" that take in 3 arguments (x, y, z).  conditionals

function isString (x,y,z){
// isString cheks if each argument is a string using the typeof operator 
//if each argument is a string it will note that in the console
if (typeof x === "string" && typeof y === "string" && typeof z === "string"){
    console.log("all parameters are string");
}else {
    console.log("wait!!! not all the parameters are strings");
}
}

isString("osiel", "monica", "tommy");
isString(10, "monica", "tommy");
isString("justin", 20, "tommy");



// vowel cheker function

function vowelChecker (x){
// vowel checker will grab the first letter of that (character) string

var firstChar = x.toLowerCase().charAt(0);
// then we will check if that first letter is a vowel
if(firstChar === "a " || firstChar === "e" || firstChar ==="i" || firstChar === "o" || firstChar === "u"){
    console.log("OMG. The first letter is a vowel!! Yay");
} else{
    console.log("HEY your not a vowel leave ");
}
}

vowelChecker("osiel");
vowelChecker("tommy");
vowelChecker("monica");
vowelChecker("justin");
vowelChecker("eddie");


// filter metohd

//filter metohd odd numbers

let numbers = [1,2,3,4,5,6,7,8,9,10];

function filterEvenNumbers (numbers){
    return numbers.filter(function(number){
        return number % 2 ===0;
    })
}

console.log(filterEvenNumbers(numbers))


// ARROW FUNCTIONS 
//regular function
var createGreeting = function (message, name) {
    return message + "," + name + "!";
  };
  
  // Arrow function
  var createGreeting = (message, name) => {
    return message + "," + name + "!";
  };
  
  // If the arrow function body contains only one expression, we can ommit the curly braces and auto return
  var createGreeting = (message, name) => message + "," + name + "!";
  
  //if an Arrow function only has one parameter, we can omit the parens () around the single paramter
  
  var greet = (greeting) => console.log(greeting);
  
  var greeting = createGreeting("Hello", "Osiel");
  
  greet(greeting);