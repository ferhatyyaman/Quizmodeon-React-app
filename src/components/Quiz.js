import React, { useState, useEffect } from 'react';
import QuizCard from './QuizCard';
import Result from './Result';

export default function Quiz() {
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  useEffect(() => {
    const savedQuizState = JSON.parse(localStorage.getItem('quizState'));

    if (savedQuizState) {
      setScore(savedQuizState.score);
      setCount(savedQuizState.count);
      setResult(savedQuizState.result);
      setSelectedAnswers(savedQuizState.selectedAnswers);
      setCurrentQuestion(savedQuizState.currentQuestion);
    }
  }, []);

  useEffect(() => {
    const quizState = { score, count, result, selectedAnswers, currentQuestion };
    localStorage.setItem('quizState', JSON.stringify(quizState));
  }, [score, count, result, selectedAnswers, currentQuestion]);


  return (
    <div>
      {result ? (
        <Result score={score} setScore={setScore} selectedAnswers={selectedAnswers} />
      ) : (
        <QuizCard
          score={score}
          setScore={setScore}
          count={count}
          setCount={setCount}
          result={result}
          setResult={setResult}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          currentQuestion={currentQuestion} 
          setCurrentQuestion={setCurrentQuestion}
        />
      )}
    </div>
  );
}
