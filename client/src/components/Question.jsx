import React from 'react'
import { useState } from "react";
import { Container } from "react-bootstrap";
import { questions } from '../questions.js'

export const Question = ({currentQuestion, setCurrentQuestion}) => {
  
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion); 
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
    {showScore ? (
      <div className='score-section'>
        You scored {score} out of {questions.length}
      </div>
    ) : (
      <>
        <Container>
          <div className="quizQuestions">
            <div class="card border-warning mb-3">
              <div class="custom-font-2 card-header">Question Number {currentQuestion + 1}</div>
              <div class="card-body">
                <h4 class="custom-font-2 card-title">{questions[currentQuestion].questionText}</h4>
                <div class="d-grid gap-2">
                  {/*index not needed ?*/} 
                  {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                    <button class="custom-font-2 btn btn-lg btn-primary" type="button" onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </>
    )}
    </div>
  )
}

export default Question;
