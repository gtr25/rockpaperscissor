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
endResultEl.textContent = "Won: " + winCount + "\n Lost: " + lostCount + "\n Tied: " + tiedCount;


function getRandomNumber() {
    return (Math.floor(Math.random() * 3))
}

function warning() {
    warningEl.textContent = "Just Choose Your's🤨"
}

function showResult() {
    clearText()
    endResultEl.textContent = "Results:  Won: " + winCount + "Lost: " + lostCount + " Tied: " + tiedCount

}

function endGame() {
    if (winCount > lostCount) {
        location.href = "https://media.tenor.com/images/de1a6d646eaad87e47cc971045bda1f8/tenor.gif";
    }else if (lostCount > winCount) {
        location.href = "https://i.imgur.com/dsF1ydA.jpg";
    } else {
        location.href = "https://i.imgur.com/eMA4nkI.jpg";
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

