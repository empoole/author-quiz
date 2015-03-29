var Question = function(question, answers, correctAnswer, points) {
	this.question = question;
	this.correctAnswer = correctAnswer;
	this.answers = answers;
	this.points = points;
};

var quiz = [
	new Question("Author of American Gods, Sandman and Neverwhere.", ["Neil Gaiman","Grant Morrison","Terry Pratchett","Douglass Adams"], 0, 1),
	new Question("Author of The Masque of the Red Death, Ligeia and The Fall of the House of Usher.", ["Lord Byron","Edgar Allan Poe","H.P. Lovecraft","Algernon Blackwood"], 1, 1),
	new Question("Author of The Martian Chronicles, Farenheit 451 and The October Country.", ["George Orwell","Ursula K. LeGuin","Rod Sterling","Ray Bradbury"], 3, 1),
	new Question("Author of The Disposessed, The Left Hand of Darkness and The Telling.", ["Margret Atwood","Ursula K. LeGuin","Arthur C. Clarke","Tom Clancy"], 1, 1),
	new Question("Author of Two Gentlemen of Verona, King Leer, and Julius Caesar.", ["Tennessee Williams","Lord Byron","William Shakespear","Francis Beaumont"], 2, 1)
];

var questionCount = 0,
	playerScore = 0;

function displayQuestion(q) {
	document.getElementById('quiz--question').innerHTML = q.question;
	for(var i = 0; i < q.answers.length; i++) {
		document.getElementById('answer-label-' + (i + 1)).innerHTML = '<span></span>&emsp;' + q.answers[i];
	}
}

// function displayQuestionNumber() {

// }

function hide(element) {
	element.style.display = 'none';
}

function show(element) {
	element.style.display = 'block';
}

function disableAnswers() {
	var answers = document.getElementsByName('answer-choice');
	for (var i = 0; i < answers.length;  i++){
    	answers[i].disabled = true;
	}
}

function clearAnswers() {
	var answers = document.getElementsByName('answer-choice');
	for (var i = 0; i < answers.length;  i++){
    	answers[i].disabled = false;
    	answers[i].value = 'off';
	}
}

function checkAnswer(q) {
	var answers = document.getElementsByName('answer-choice'),
		playerAnswer = "";

	for (var i = 0; i < answers.length; i++) {
		if(answers[i].checked) {
			var selector = 'label[for=' + answers[i].id + ']',
				label = document.querySelector(selector),
				text = label.innerHTML;
			playerAnswer = text.replace(/<\/?span[^>]*>/g,"").trim();
		}
	}

	if (playerAnswer === q.answers[q.correctAnswer]) {
		playerScore++;
	}
	disableAnswers();

}

function totalScore() {
	var total = 0;
	for(var i = 0; i < quiz.length; i++) {
		total += quiz[i].points;
	}
	return total;
}