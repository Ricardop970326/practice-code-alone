// document.body.innerHTML = "it is not sussy, it the DOM working with the browser";

// access the DOM element/ node
let heading = document.getElementById('heading');
//  MODIFY the DOM
heading.textContent = 'Hello, DOM';

let content = document.getElementById('content');
content.innerHTML = "this paragraph is update dinamicaly";
//content.innerHTML = "<h2> DOM is awesome!</h2>"


let btn = document.getElementById("btn");
btn.addEventListener('click',function(){
    alert("button is clicked!!!")
})
PerformanceResourceTiming.reet()