const p1 = {
	score: 0,
	display: document.querySelector(".p1-display"),
	button: document.querySelector(".p1-btn")
};

const p2 = {
	score: 0,
	display: document.querySelector(".p2-display"),
	button: document.querySelector(".p2-btn")
};

const resetBtn = document.querySelector(".reset");
const playingToSelect = document.querySelector("#playingTo");
let winningScore = parseInt(playingToSelect.value);
let isGameOver = false;

function updateScore(player, opponent) {
	if (!isGameOver) {
		player.score++;
		if (player.score === winningScore) {
			isGameOver = true;
			player.display.classList.add("has-text-success");
			opponent.display.classList.add("has-text-danger");
			player.button.disabled = true;
			opponent.button.disabled = true;
		}
		player.display.innerText = player.score;
	}
}

p1.button.addEventListener("click", function () {
	updateScore(p1, p2);
});

p2.button.addEventListener("click", function () {
	updateScore(p2, p1);
});

playingToSelect.addEventListener("change", function (e) {
	resetScores();
	winningScore = parseInt(e.target.value);
});

resetBtn.addEventListener("click", resetScores);

// Function which resets the game thus resetting the scores of the players and the isGameOver to false;
function resetScores() {
	isGameOver = false;
	for (p of [p1, p2]) {
		p.score = 0;
		p.button.disabled = false;
		p.display.innerText = p.score;
		p.display.classList.remove("has-text-success", "has-text-danger");
	}
}
