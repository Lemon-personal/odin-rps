let playerScore = 0
let comScore = 0
let rounds = 0

while (isNaN(rounds = +(prompt("How many rounds?")))){
}


for (let i = 0; i < rounds; i++){
    console.log("Round: " + (i + 1))

    let playerChoice = getHumanChoice()
    let comChoice = getComputerChoice()

    playRound(playerChoice, comChoice)
}

if (playerScore > comScore){
    console.log("You Win! " + playerScore + " to " + comScore)
}
else if (playerScore < comScore){
    console.log("You Lose... " + playerScore + " to " + comScore)
}
else {
    console.log("Its a Tie! " + playerScore + " to " + comScore)
}

console.log("Reload page to play again!")


function  playRound(player, computer){

    console.log(player + " VS. " + computer)

    switch (player){
        case "rock":
            if (computer == "scissors"){
                console.log("You win! Rock beats Scissors!")
                playerScore += 1
            }
            else if (computer == "paper"){
                console.log("You lose! Paper beats Rock!")
                comScore += 1
            }
            else{
                console.log("It's a tie!")
            }
            return;

        case "paper":
            if (computer == "rock"){
                console.log("You win! Paper beats Rock!")
                playerScore += 1
            }
            else if (computer == "Scissors"){
                console.log("You lose! Scissors beats Paper!")
                comScore += 1
            }
            else{
                console.log("It's a tie!")
            }
            return;

        case "scissors":
            if (computer == "paper"){
                console.log("You win! Scissors beats Paper!")
                playerScore += 1
            }
            else if (computer == "rock"){
                console.log("You lose! Rock beats Scissors!")
                comScore += 1
            }
            else{
                console.log("It's a tie!")
            }
            return;
        default:
            console.log("Invalid choice!")
    }

}

function getComputerChoice(){
    let rand = Math.random()
    let choice

    if (rand <= (1/3)){
        choice = "rock"
    }
    else if (rand <= (2/3)){
        choice = "paper"   
    }
    else if (rand <= 1){
        choice = "scissors"
    }

    return choice
}

function getHumanChoice(){
    let choice = prompt("Choose: Rock, Paper, Scissor", '')

    return choice.toLowerCase()
}

