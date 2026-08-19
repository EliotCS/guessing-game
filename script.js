const intromenu = document.getElementById("intro-menu");
const start = document.getElementById("startbut");
const game = document.getElementById("game");

//Intro-Menu Screening
start.addEventListener("click", function(){
    intromenu.style.transition = "opacity 0.3s";
    
    intromenu.style.opacity = "0";
    
    
    setTimeout(function(){
    intromenu.style.display = "none";
    game.style.display = "block"},300)

});

//The Guessing game itself
let guessinput  =  document.getElementById("number");

const rannum = Math.floor(Math.random() * 100) + 1;
let running = true;
const guessbut = document.getElementById("submit");
let popup = document.getElementById("pop");

let popupTimer;
guessbut.addEventListener("click", function(){
    clearTimeout(popupTimer);

    let guessnum  = Number(guessinput.value);
    if(guessnum<=0 || guessnum > 100){
            popup.style.color = "red";
            popup.textContent = "Please try again make sure it between 1-100😤"


    }
    else if (guessnum === rannum) {
            popup.textContent = "Yess you got it right its " + rannum;
              popup.style.color = "lime";
        
        } 
        else if (guessnum > rannum) {
            popup.style.color = "red";
            popup.textContent = "Too high! Try again.";
        } 
        else {
            popup.style.color = "red";
            popup.textContent = "Too low! Try again.";
        }

        popup.style.opacity = "1";

        popupTimer = setTimeout(function() {
        popup.style.opacity = "0";
    }, 3000);

});