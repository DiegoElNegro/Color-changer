const colors = ["black", "red", "blue", "purple", "brown", "pink", "green", "yellow", "green", "grey", "white", "teal", "aqua", "gold", "orange", "lime"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
        const randomNumber =  getRandomNumber();
        //console.log(randomNumber);
        document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}