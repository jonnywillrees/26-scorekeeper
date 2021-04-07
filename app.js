const p1Display = document.querySelector(".p1-display");
const p2Display = document.querySelector(".p2-display");

const p1Btn = document.querySelector(".p1-btn");
const p2Btn = document.querySelector(".p2-btn");
const resetBtn = document.querySelector(".reset");

const playingToSelect = document.querySelector("#playingTo");

let p1Score = 0;
let p2Score = 0;
let winningScore = parseInt(playingToSelect.value);
let isGameOver = false;

p1Btn.addEventListener("click", function () {
	if (!isGameOver) {
		p1Score++;
		if (p1Score === winningScore) {
			isGameOver = true;
			p1Display.classList.add("has-text-success");
			p2Display.classList.add("has-text-danger");
			p1Btn.disabled = true;
			p2Btn.disabled = true;
		}
		p1Display.innerText = p1Score;
	}
});

p2Btn.addEventListener("click", function () {
	if (!isGameOver) {
		p2Score++;
		if (p2Score === winningScore) {
			isGameOver = true;
			p2Display.classList.add("has-text-success");
			p1Display.classList.add("has-text-danger");
			p1Btn.disabled = true;
			p2Btn.disabled = true;
		}
		p2Display.innerText = p2Score;
	}
});

playingToSelect.addEventListener("change", function (e) {
	resetScores();
	winningScore = parseInt(e.target.value);
});

resetBtn.addEventListener("click", resetScores);

// Function which resets the game thus resetting the scores of the players and the isGameOver to false;
function resetScores() {
	isGameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1Display.innerText = p1Score;
	p2Display.innerText = p2Score;

	p1Display.classList.contains("has-text-success") &&
		p1Display.classList.remove("has-text-success");
	p2Display.classList.contains("has-text-success") &&
		p2Display.classList.remove("has-text-success");

	p1Display.classList.contains("has-text-danger") &&
		p1Display.classList.remove("has-text-danger");
	p2Display.classList.contains("has-text-danger") &&
		p2Display.classList.remove("has-text-danger");

	p1Btn.disabled = false;
	p2Btn.disabled = false;
}
