//function 
function add (a,b){
  return a + b;
};

console.log(add(10, 10))
//               a , b

function subtrac (x, y){
    return x - y;
};

console.log(subtrac(30, 5))


// function with expression is a function is assigned to a var or stored in a data structure

const multiply = function (a, b){
    return a * b;
};
console.log(multiply(10, 20));


// arrow function is a quieker way to write a function

const divide = (a, b) =>{
    return a / b;
};

console.log(divide(20, 10));

//invoke function

(function(){
   console.log("I am an invoked funtion") 
})();
