const buttons = document.querySelectorAll('.btn');
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');


let myScore = 0;
let compScore = 0;


function getComputerChoice() {
    const choices = ['Snake', 'Water', 'Gun'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}


function determineWinner(myChoice , compChoice) {
    if (myChoice === compChoice) {
        return "It's a tie!";
     } 
     else if (
        (myChoice === "Snake" && compChoice === "Water") |
        (myChoice === "Water" && compChoice === "Gun") |
        (myChoice === "Gun" && compChoice === "Snake")
    ) {
        myScore++;
        return "You win!";
    }
    else {
        compScore++;
        return "Computer wins!";
    }
}

function updateGame(myChoice, compChoice) {
    const winner = determineWinner(myChoice, compChoice);
    resultDiv.innerHTML = `You chose ${myChoice}.<br> Computer chose ${compChoice}.<br><div class="winner-box"> <span class="winner"> ${winner}`;
    scoreDiv.textContent = `Score - You: ${myScore} | Computer: ${compScore}`;
}


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const myChoice = button.textContent.trim();
        const compChoice = getComputerChoice();
        updateGame(myChoice, compChoice);
    });
});
