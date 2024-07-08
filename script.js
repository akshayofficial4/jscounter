const labelCounter = document.getElementById("labelCounter");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

//Functions for Operations...

let count = 0;

//IncreaseButton....

increaseBtn.onclick = function(){
    count++;
    labelCounter.textContent = count;
};

// Decrease Button...

decreaseBtn.onclick = function(){
    count--;
    labelCounter.textContent = count;
}

//Reset Button...

resetBtn.onclick = function (){
    count = 0;
    labelCounter.textContent = count;
}


