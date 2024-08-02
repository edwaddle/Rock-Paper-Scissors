const myMessage = document.querySelector('.message');
const ROCK_VALUE = 1;
const PAPER_VALUE = 2;
const SCISSOR_VALUE = 3;
let humanScore = 0; computerScore = 0; tieCounter = 0;

let playerSelection = document.querySelector(".playerSelection");

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
    const paperChoice = document.createElement("button");
    paperChoice.setAttribute('class', 'choice');  
    paperChoice.textContent = 'Paper';
    playerSelection.appendChild(paperChoice);

    const rockChoice = document.createElement("button");
    rockChoice.setAttribute('class', 'choice');  
    rockChoice.textContent = 'Rock';
    playerSelection.appendChild(rockChoice);

    const scissorChoice = document.createElement("button");
    scissorChoice.setAttribute('class', 'choice');  
    scissorChoice.textContent = 'Scissors';
    playerSelection.appendChild(scissorChoice);
         
           rockChoice.onclick = () => {
                paperChoice.remove();
                rockChoice.remove();
                scissorChoice.remove();
                console.log("rock");
                playRound(ROCK_VALUE, getComputerChoice());
            }
    
    
            paperChoice.onclick = () => {
                paperChoice.remove();
                rockChoice.remove();
                scissorChoice.remove();
                console.log("paper");
                playRound(PAPER_VALUE, getComputerChoice());
            }
        
            scissorChoice.onclick = () => {
                paperChoice.remove();
                rockChoice.remove();
                scissorChoice.remove();
                console.log("scissors");
                playRound(SCISSOR_VALUE, computerChoice());
            }


    

}

function playRound(humanChoice, computerChoice){
    console.log("working");
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
    getHumanChoice();
    /*
    for (i = 0; i < 5; i++){
        setTimeout(function(){
           
        }, 1000);
        
        
    }
        */
}