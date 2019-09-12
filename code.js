
var myQuestions = [
	{
		question: "What is the intensity of interference in privacy of this issue?",
		answers: {
			'1':'1-Light',
			'2':'2-Moderate',
			'3':'3-Intense'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is the time passed since the event in question occurred?",
		answers: {
			'0.25':'(passage of time more than 3 years and less than 7 years)',
			'0.5':'(passage of time more than 7 years and less than 10 years)',
			'0.75':'(passage of time more than 10 years and less than 13 years)',
			'1':'(passage of time more than 13 years)',
			'0':'(passage of time less than 3 years)'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is the degree of public interest in the issue at hand?",
		answers: {
			'1':'Minor public interest - is level of interest for a local community or for an issue where its importance is time-sensitive, connected to a particular event. In other words, the matter is limited by space and/or time.',
			'2':'Medium public interest - concerns matters of interest for larger communities, which may not have an immediate direct impact upon the lives of the majority.',
			'3':'Significant public interest - concerns matters which are important for the entire nation, or which may have a direct effect upon the lives of the majority.'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is the level of the public figure involved in the issue?",
		answers: {
			'1':'The figure involved in the matter has entered public domain involuntarily.',
			'2':'The figure involved in the matter has entered public domain voluntarily.',
			'3':'The figure involved in the matter is an individual holding significant public power.'
		},
		correctAnswer: 'b'
	},
	{
		question: "How was the information in question obtained?",
		answers: {
			'0.75':'The information was obtained illegally.',
			'0.5':'The information was obtained in a morally unacceptable yet legally acceptable way.',
			'0.25':'The information was obtained in a morally questionable way.'
		},
		correctAnswer: 'b'
	},
	{
		question: "Does the person in question deserves empathy?",
		answers: {
			'0':'No',
			'0.25':'Yes,but only a little.',
			'0.5':'Yes.',
			'0.75':'Yes, more than a little.',
			'1':'Yes, a lot.'
		},
		correctAnswer: 'b'
	},
	{
		question: "Does the issue at stake provokes empathy?",
		answers: {
			'0':'No',
			'0.25':'Yes,but only a little.',
			'0.5':'Yes.',
			'0.75':'Yes, more than a little.',
			'1':'Yes, a lot.'
		},
		correctAnswer: 'b'
	}
];


function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// we'll need a place to store the output and the answer choices
		var output = [];
		var answers;

		// for each question...
		for(var i=0; i<questions.length; i++){

			// first reset the list of answers
			answers = [];

			// for each available answer to this question...
			for(letter in questions[i].answers){

				// ...add an html radio button
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ questions[i].answers[letter]
					+ '</label> <br>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<br><div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join('');
	}

	function showResults(questions, quizContainer, resultsContainer){
			// gather answer containers from our quiz
			var answerContainers = quizContainer.querySelectorAll('.answers');

			// keep track of user's answers
			var pr = 0,
					t = 0,
					pi = 0,
					pf = 0,
					oi = 0,
					e1 = 0,
					e2 = 0;

			// find selected answer
			pr = parseFloat((answerContainers[0].querySelector('input[name=question'+0+']:checked')||{}).value);
			t = parseFloat((answerContainers[1].querySelector('input[name=question'+1+']:checked')||{}).value);
			pi = parseFloat((answerContainers[2].querySelector('input[name=question'+2+']:checked')||{}).value);
			pf = parseFloat((answerContainers[3].querySelector('input[name=question'+3+']:checked')||{}).value);
			oi = parseFloat((answerContainers[4].querySelector('input[name=question'+4+']:checked')||{}).value);
			e1 = parseFloat((answerContainers[5].querySelector('input[name=question'+5+']:checked')||{}).value);
			e2 = parseFloat((answerContainers[6].querySelector('input[name=question'+6+']:checked')||{}).value);

		  console.log(pr + ' ' + t + ' ' + pi + ' ' + pf + ' ' + oi + ' ' + e1 + ' ' + e2);



			alert(getAnswer( ibf(pr,t,pi,pf,oi,e1,e2)) );

			// for each question...
			// for(var i=0; i<questions.length; i++){
			//
			// 	// find selected answer
			// 	userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			//
			// 	// if answer is correct
			// 	if(userAnswer===questions[i].correctAnswer){
			// 		// add to the number of correct answers
			// 		numCorrect++;
			//
			// 		// color the answers green
			// 		answerContainers[i].style.color = 'lightgreen';
			// 	}
			// 	// if answer is wrong or blank
			// 	else{
			// 		// color the answers red
			// 		answerContainers[i].style.color = 'red';
			// 	}
			// }

				// show number of correct answers out of total
				resultsContainer.innerHTML = ibf(pr,t,pi,pf,oi,e1,e2);
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}


function getAnswer(ibf) {
	if (ibf > 1) {
		return "Right of privacy prevails";
	}
	if (ibf < 1) {
		return "Freedom of expression prevails";
	}
	return "Stalemate"
}

//Algorithm: Internt Balancing Formula
function ibf(pr, t, pi, pf, oi, e1, e2) {

	//RIGHT TO PRIVACY
		//Internet Vulnerability  V constant of value 1  V(1)
		const v = 1;

		var ibf = (v + pr + t + e1) / (pi + pf - oi + e2);

		return ibf;

}


var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
