//write function that adds to the score of the team based on the button clicked and arguments passed
function addPoints(team, points){
    const scoreEl = document.getElementById(`${team}-score`);
    let currentScore = parseInt(scoreEl.textContent, 10);
    scoreEl.textContent = currentScore + points;
}

//function that creates a new game by resetting the scores
function newGame(){
    document.getElementById("home-score").textContent = 0;
    document.getElementById("guest-score").textContent = 0;
}

