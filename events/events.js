// declare var
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decraseBtn');
const numbElement = document.getElementById('number');

// set up the initial value of number
let number = 0;

//update the value of the number
function updateNumber(){
    numbElement.textContent = number;

}

// EVENT LISTERNER
increaseBtn.addEventListener('click', function(){
    number++;
    updateNumber();
});

decreaseBtn.addEventListener('click', function(){
    number--;
    updateNumber();
});

updateNumber();

