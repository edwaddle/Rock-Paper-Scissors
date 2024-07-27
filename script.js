console.log("Hello Workd");
const myMessage = document.querySelector('.message');
console.log(myMessage); 
const ROCK_VALUE = 1;
const PAPER_VALUE = 2;
const SCISSOR_VALUE = 3;
let humanScore = 0; computerScore = 0; tieCounter = 0;
function myFunction(){
    humanScore = 0; 
    computerScore = 0;
    tieCounter = 0;
    playGame();
}
function getComputerChoice(){
    let num = Math.floor(Math.random()*3)+1;
    console.log(num);
    return num;
    //1 is rock
    //2 is paper
    //3 is scissors
}

function getHumanChoice(){
    let choice = prompt("Choose Rock, Paper, or Scissors");
    choice = choice.toLowerCase();
    if (choice === "rock"){
        return ROCK_VALUE;
    }
    else if (choice === "paper"){
        return PAPER_VALUE;
    }
    else if (choice === "scissors"){
        return SCISSOR_VALUE;
    }
    else{
        return -1;
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        tieCounter++;
    }
    else if (humanChoice === ROCK_VALUE){
        if (computerChoice === SCISSOR_VALUE){
            ++humanScore;
        }
        else if (computerChoice === PAPER_VALUE){
            ++computerScore;
        }
    }
    else if (humanChoice === PAPER_VALUE){
        if (computerChoice === ROCK_VALUE){
            ++humanScore;
        }
        else if (computerChoice === SCISSOR_VALUE){
            ++computerScore;
        }
    }
    else if (humanChoice === SCISSOR_VALUE){
        if (computerChoice === ROCK_VALUE){
            ++computerScore;
        }
        else if (computerChoice === PAPER_VALUE){
            ++humanChoice;
        }
    }
    console.log( humanScore + " " + computerScore + ". " + humanChoice + " " + computerChoice);
    myMessage.textContent = "Human Score is: " + humanScore + ". Computer Score is: " + computerScore + ". Tie Counter is: " + tieCounter + "." ;
}

function playGame(){
    for (i = 0; i < 5; i++){
        setTimeout(function(){
            playRound(getHumanChoice(), getComputerChoice());
        }, 1000);
        
        
    }
}