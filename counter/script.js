const count = document.getElementById("count");
const reset = document.getElementById("reset-btn");
const increase = document.getElementById("increase-btn");
const decrease = document.getElementById("decrease-btn");
let n = 0;

document.addEventListener("click", e => {
    if (e.target.id === "reset-btn"){
        n = 0;
        count.innerText = n;
    } else if (e.target.id === "increase-btn"){
        n++;
        count.innerText = n;
    } else if (e.target.id === "decrease-btn"){
        n--;
        count.innerText = n;
    }
    if (n > 0){
        count.style.color = "rgb(215, 255, 221)";
    } else if (n < 0){
        count.style.color = "rgb(250, 217, 217)";
    } else {
        count.style.color = "rgb(255, 255, 255)";
    }
})