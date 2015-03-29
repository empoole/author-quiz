function clickStart() {
	questionCount = 0;
	hide(document.getElementById('quiz--instructions'));
	show(document.getElementById('quiz--qa'));
	displayQuestion(quiz[questionCount]);
}

function clickNext() {
	var totalScoreSpan = document.getElementById('total-score'),
		playerScoreSpan = document.getElementById('player-score');

	if(questionCount >= 4) {
		hide(document.getElementById('quiz--qa'));
		show(document.getElementById('quiz--score'));
		totalScoreSpan.innerHTML = totalScore();
		playerScoreSpan.innerHTML = playerScore;
		
		if (playerScore >= 4) {
			playerScoreSpan.className = playerScoreSpan.className + " green-text";
		} else if (playerScore >= 3 && playerScore < 4) {
			playerScoreSpan.className = playerScoreSpan.className + " yellow-text";
		} else {
			playerScoreSpan.className = playerScoreSpan.className + " red-text";
		}
	} else {
		questionCount++;
		displayQuestion(quiz[questionCount]);
		//displayQuestionNumber(questionCount);
		hide(document.getElementById('quiz--next-btn'));
		show(document.getElementById('quiz--confirm-btn'));
	}

	clearAnswers();
}

function clickConfirm() {
	checkAnswer(quiz[questionCount]);
	hide(document.getElementById('quiz--confirm-btn'));
	show(document.getElementById('quiz--next-btn'));
}

function clickRestart() {
	questionCount = 0;
	playerScore = 0;
	hide(document.getElementById('quiz--score'));
	show(document.getElementById('quiz--instructions'));
}