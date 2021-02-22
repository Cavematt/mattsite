import React, { useState } from 'react';
import "./OwaspQuiz.css"


export default function OwaspQuiz() {
	const questions = [
		{
			questionText: 'What is Number One on the OWASP list?',
			answerOptions: [
				{ answerText: 'XSS', isCorrect: false },
				{ answerText: 'Security Misconfiguration', isCorrect: false },
				{ answerText: 'Injection Attacks', isCorrect: true },
				{ answerText: 'DDOS', isCorrect: false },
			],
		},
		{
			questionText: 'What is Access Contol?',
			answerOptions: [
				{ answerText: 'Making sure there is a lock on the gate', isCorrect: false },
				{ answerText: 'Giving the user to correct resources and away from resources they shouldnt be able to access.', isCorrect: true },
				{ answerText: 'Authentication (which verifies identity)', isCorrect: false },
				{ answerText: 'Putting a malicious code/query into an input field', isCorrect: false },
			],
		},
		{
			questionText: 'What is Cross Site Scripting (XSS)',
			answerOptions: [
				{ answerText: 'A malicious actor sends a POST request to your web app', isCorrect: true },
				{ answerText: 'A malicious actor takes advantage of a broken link', isCorrect: false },
				{ answerText: 'An attacker takes advantage of data parsing', isCorrect: false },
				{ answerText: 'An actor is bad at drama', isCorrect: false },
			],
		},
		{
			questionText: 'Who is Equation Group?',
			answerOptions: [
				{ answerText: 'geographers', isCorrect: false },
				{ answerText: 'russia', isCorrect: false },
				{ answerText: 'FBI', isCorrect: false },
				{ answerText: 'TAO', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='owaspApp'>
			{showScore ? (
				<div className='score-section'>
					<p>You scored {score} out of {questions.length}</p>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}