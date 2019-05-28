var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var sc1 = document.querySelector("#sc1");
var sc2 = document.querySelector("#sc2");
var resetB = document.getElementById("rs");
var numInput = document.querySelector("input");
var winningDisplay = document.querySelector("p span");
var p1Score= 0;
var p2Score= 0;
var gameOver = false;
var winningScore = 5; 

p1Button.addEventListener("click", function(){
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            sc1.classList.add("winner");
            gameOver = true;
        }
        sc1.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function(){
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            sc2.classList.add("winner");
            gameOver = true;
        }
         sc2.textContent = p2Score;
    }
});

  
function reset() {
    p1Score = 0;
    p2Score = 0;
    sc1.textContent = 0;
    sc2.textContent = 0;
    sc1.classList.remove("winner");
    sc2.classList.remove("winner");
    gameOver = false; 
}

resetB.addEventListener("click", function(){
    reset();
   });

numInput.addEventListener("change", function () {
     winningDisplay.textContent = this.value;
     winningScore = Number(this.value);
     reset();
});