let playerWins = 0;
let computerWins = 0;
let rounds = 0;
let chosenRounds = false;

let computerSelection = "";
let playerSelection = "";

welcome();

function welcome(){
    console.log("Welcome to Rock-Scissors-Paper!");
    startGame();
}

function chooseRounds(){

    while(!chosenRounds){
        rounds = parseInt(prompt("Best of how many rounds? (Odd numbers only)"));
        if(rounds<10 && rounds>1 && rounds %2 !== 0){
            console.log(rounds + " round game chosen.");
            chosenRounds=true;
        }
        else{
            console.log("Invalid input");
        }
    }
    
}

function startGame(){
    
    chooseRounds(); 

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
    let again = "";
    console.log("\nPlayer: " + playerWins + " / Computer: " + computerWins);
    if(playerWins>computerWins){
        console.log("You win! Congratulations.")
    }
    else if(computerWins>playerWins){
        console.log("You lose! Better luck next time.")
    }
    console.log("Play another game?");
    while(again !== "yes" && again !== "no"){  
        again=prompt("Play another game?");
        again=again.toLowerCase();
    }
    if(again === "yes"){
        playerWins = 0;
        computerWins = 0;
        rounds = 0;
        chosenRounds = false;
        computerSelection = "";
        playerSelection = "";
        startGame();
    }
    if(again === "no"){
        console.log("Thanks for playing.");
    }
}


