let playerScore = 0
let comScore = 0
let rounds = 0

//buttons
let buttonDiv = document.createElement("div")
let rockButton = document.createElement("button")
let paperButton = document.createElement("button")
let scissorsButton = document.createElement("button")

rockButton.textContent = "Rock"
paperButton.textContent = "Paper"
scissorsButton.textContent = "Scissors"

buttonDiv.appendChild(rockButton)
buttonDiv.appendChild(paperButton)
buttonDiv.appendChild(scissorsButton)

document.body.appendChild(buttonDiv)

buttonDiv.querySelectorAll("button").forEach(button => button.addEventListener('click', playRound))

let resultDiv = document.createElement("div")
document.body.appendChild(resultDiv)

while (playerScore <= 5 || comScore <= 5){
    
}

function playRound(event){
    let player = event.target.textContent.toLowerCase()
    let computer = getComputerChoice()

    console.log(player + " VS. " + computer)

    switch (player){
        case "rock":
            if (computer == "scissors"){
                resultDiv.textContent = "You win! Rock beats Scissors!"
                playerScore += 1
            }
            else if (computer == "paper"){
                resultDiv.textContent = "You lose! Paper beats Rock!"
                comScore += 1
            }
            else{
                resultDiv.textContent = "It's a tie!"
            }
            return;

        case "paper":
            if (computer == "rock"){
                resultDiv.textContent = "You win! Paper beats Rock!"
                playerScore += 1
            }
            else if (computer == "Scissors"){
                resultDiv.textContent = "You lose! Scissors beats Paper!"
                comScore += 1
            }
            else{
                resultDiv.textContent = "It's a tie!"
            }
            return;

        case "scissors":
            if (computer == "paper"){
                resultDiv.textContent = "You win! Scissors beats Paper!"
                playerScore += 1
            }
            else if (computer == "rock"){
                resultDiv.textContent = "You lose! Rock beats Scissors!"
                comScore += 1
            }
            else{
                resultDiv.textContent = "It's a tie!"
            }
            return;
        default:
            resultDiv.textContent = "Invalid choice!"
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
