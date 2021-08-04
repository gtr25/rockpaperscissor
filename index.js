let computerSignEl = document.getElementById("computerSign");
let resultEl = document.getElementById("result");
let warningEl = document.getElementById("warning");
let endGameEl = document.getElementById("endGameBtn");
let endResultEl = document.getElementById("endResult");
let playerSign = null;
let hands = ["Rock", "Paper", "Scissor"];
let winCount = 0;
let lostCount = 0;
let tiedCount = 0;

endResultEl.textContent = "Won: " + winCount + " Lost: " + lostCount + " Tied: " + tiedCount;


function getRandomNumber() {
    return (Math.floor(Math.random() * 3))
}

function warning() {
    warningEl.textContent = "You can't choose that 💀"
}

function showResult() {
    clearText()
    endResultEl.textContent = "Won: " + winCount + " Lost: " + lostCount + " Tied: " + tiedCount

}

function endGame() {
    if (winCount > lostCount) {
        location.href = "https://bit.ly/3imIRjn";
    }else if (lostCount > winCount) {
        location.href = "https://bit.ly/3ikao59";
    } else {
        location.href = "https://bit.ly/37hBovA";
    }
}


function clearText() {
    warningEl.textContent = "";
}

function rock() {
    console.log("Player has selected Rock");
    clearText();
    playerSign = "rock";
    computerSignEl.textContent = hands[getRandomNumber()]
    if (computerSignEl.textContent === "Rock") {
        resultEl.textContent = "Tied";
        tiedCount += 1;
        showResult();
    } else if (computerSignEl.textContent === "Paper") {
        resultEl.textContent = "You lose";
        lostCount += 1;
        showResult();
    } else {
        resultEl.textContent = "You won";
        winCount += 1;
        showResult();
    }

}

function paper() {
    console.log("Player has selected Paper");
    clearText();
    playerSign = "paper";
    computerSignEl.textContent = hands[getRandomNumber()]
    if (computerSignEl.textContent === "Paper") {
        resultEl.textContent = "Tied";
        tiedCount += 1;
        showResult();
    } else if (computerSignEl.textContent === "Scissor") {
        resultEl.textContent = "You lose";
        lostCount += 1;
        showResult();
    } else {
        resultEl.textContent = "You won";
        winCount += 1;
        showResult();
    }
}

function scissor() {
    console.log("Player has selected Scissor");
    showResult();
    clearText();
    playerSign = "scissor";
    computerSignEl.textContent = hands[getRandomNumber()]
    if (computerSignEl.textContent === "Scissor") {
        resultEl.textContent = "Tied";
        tiedCount += 1;
        showResult();
    } else if (computerSignEl.textContent === "Rock") {
        resultEl.textContent = "You lose";
        lostCount += 1;
        showResult();
    } else {
        resultEl.textContent = "You won";
        winCount += 1;
        showResult();
    }
}
