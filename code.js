let playerWins = 0;
let computerWins = 0;
let rounds = 0;

let computerSelection = "";
let playerSelection = "";

welcome();

function welcome(){
    console.log("Welcome to Rock-Scissors-Paper!");
    startGame();
}

function startGame(){
    
    rounds = parseInt(prompt("How many rounds? (Uneven numbers only)"));
    
    for(let i = 0; i<rounds; i++){
        computerSelection = "";
        playerSelection = "";
        console.log("\nPlayer: " + playerWins + " / Computer: " + computerWins);
        playRound();
    }
    whoWon();
}

function playRound(playerSelection, computerSelection){
    
    humanPlay();
    computerPlay();
    calculate();
}

function humanPlay(){

    while(playerSelection != "rock" && playerSelection != "scissors" && playerSelection != "paper"){
        playerSelection = prompt("Rock, paper, or scissors?");
        if(playerSelection !=null){
            playerSelection = playerSelection.toLowerCase();
            console.log("You chose " + playerSelection);}
        
    }
}

function computerPlay(){
    let RNG = Math.floor(Math.random() * 3);
    switch (RNG){
        case 0:
            computerSelection = "rock";
            break;
        case 1:
            computerSelection = "scissors";
            break;
        case 2:
            computerSelection = "paper";
            break;
        
    }
    console.log("Computer chose " + computerSelection);
}

function calculate(){
    
    switch(true){
        case((playerSelection === "rock")&&(computerSelection === "rock")):
            console.log("It's a tie.");
            rounds+=1;
            break;
        case((playerSelection === "rock")&&(computerSelection === "scissors")):
            console.log("You win the round.");
            playerWins ++;
            break;
        case((playerSelection === "rock")&&(computerSelection === "paper")):
            console.log("You lose the round.");
            computerWins ++;
            break;
        case((playerSelection === "scissors")&&(computerSelection === "rock")):
            console.log("You lose the round.");
            computerWins ++;
            break;
        case((playerSelection === "scissors")&&(computerSelection === "scissors")):
            console.log("It's a tie.");
            rounds+=1;
            break;
        case((playerSelection === "scissors")&&(computerSelection === "paper")):
            console.log("You win the round.");
            playerWins ++;
            break;
        case((playerSelection === "paper")&&(computerSelection === "rock")):
            console.log("You win the round.");
            playerWins ++;
            break;
        case((playerSelection === "paper")&&(computerSelection === "scissors")):
            console.log("You lose the round.");
            computerWins ++;
            break;
        case((playerSelection === "paper")&&(computerSelection === "paper")):
            console.log("It's a tie.");
            rounds+=1;
            break;
    }
}

function whoWon(){
    if(playerWins>computerWins){
        console.log("You win! Congratulations.")
    }
    else if(computerWins>playerWins){
        console.log("You lose! Better luck next time.")
    }
}


