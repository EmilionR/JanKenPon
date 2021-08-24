let compChoice = "";

function computerPlay(){
    let RNG = Math.random(2);
    if(RNG = 0){
        compChoice = "Rock";
    }
    if(RNG = 1){
        compChoice = "Paper";
    }
    if(RNG = 2){
        compChoice = "Scissors";
    }
    console.log(compChoice);
}