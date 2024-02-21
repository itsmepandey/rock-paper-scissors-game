let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    // rock, paper, scissors
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

};

const  drawGame = () => {
    console.log("Game was Draw");
    msg.innerText = "Game Draw , play again!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;

        console.log("you win!");
        msg.innerText = `You win!, ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;

        console.log("you lose");
        msg.innerText = `You lose, ${compChoice} beats your choice ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("userChoice", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("compChoice", compChoice);

    if(userChoice === compChoice) {
        //Draw Game
    drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors, paper
            userWin= compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else{
            //rock,paper
            userWin = compChoice === "rock" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    

};
 
choices.forEach((choice) => {
    
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });
});