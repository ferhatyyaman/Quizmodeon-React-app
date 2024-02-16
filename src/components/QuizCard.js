import React, { useEffect, useState } from 'react';
import questions from '../Data/Questions';
import Header from './Header';
import QuizModal from './QuizModal';
import { useLocation } from 'react-router-dom';
import { FaQuestion } from 'react-icons/fa';
import { GiSandsOfTime } from 'react-icons/gi';
import { FaCrown } from 'react-icons/fa';

export default function QuizCard({ score, setScore, count, setCount, result, setResult,selectedAnswers, setSelectedAnswers, currentQuestion,
  setCurrentQuestion, }) {
  const [timer, setTimer] = useState(30);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const location = useLocation();
  const username = location.state?.username || 'Username';

  const handleAnswerSelect = (optionId) => {
    if (timer > 0) {
      const selectedOption = questions[currentQuestion].options.find((option) => option.id === optionId);
      const isCorrect = selectedOption.isCorrect;

      setSelectedAnswers([...selectedAnswers, { questionId: currentQuestion, selectedOption, isCorrect }]);
      setScore(isCorrect ? score + 1 : score);

      if (currentQuestion + 1 === questions.length) {
        setIsCorrect(isCorrect);
        setIsModalOpen(true);
        setResult(true);
      } else {
        setTimer(30);
        setIsModalOpen(true);
        setSelectedOptionColor(optionId, isCorrect ? 'green-500' : 'red-500');


        setTimeout(() => {
            setIsModalOpen(false); 
            setCurrentQuestion(currentQuestion + 1);
            setTimer(30);
          }, 1000)
      }
    }
  };

  const setSelectedOptionColor = (optionId, color) => {
    const button = document.getElementById(`option-${optionId}`);
    if (button) {
      button.classList.remove('hover:bg-indigo-400', 'hover:text-white', 'bg-white', 'text-black', 'border-2', 'border-gray-300');
      button.classList.add(`bg-${color}`, 'text-white');
    }
  };
  
  const isAnswered = selectedAnswers.some((answer) => answer.questionId === currentQuestion);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }

      if (timer === 0) {
        setCount(count + 1);
        setTimer(30);

        setIsModalOpen(true);
        setIsCorrect(false);
      }

      if (count >= 10) {
        setResult(true);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer, count, setCount, setResult, isAnswered]);


  const handleModalClose = () => {
    setIsModalOpen(false);
    setCurrentQuestion(currentQuestion + 1);
    setTimer(30);
  };

  return (
    <div className='container mx-auto max-w-screen-lg '>
      <Header username={username} score={score} rank={currentQuestion + 1} />
      <div className='container'>
        <div className='flex flex-col items-center'>
          <img
            src='https://store-images.s-microsoft.com/image/apps.7291.43934376-997a-455f-85f7-d51e78b0bd6c.330380d1-aa90-44ed-aa70-21aef9e7c242.c2867135-a57f-4a33-83cf-b8332b809709.png'
            alt='Logo'
            className='w-24 h-24 mb-4'
          />
        </div>

        <div className='flex justify-between items-center mx-40'>
          <div className='flex flex-col items-center text-2xl font-bold mb-6'>
            <FaQuestion />
            {currentQuestion + 1}/{questions.length}
          </div>
          <div className='text-2xl font-bold mb-6'>
            <FaCrown />
          </div>
          <div className='flex flex-col items-center text-2xl font-bold mb-6 '>
            <GiSandsOfTime />
            {timer}
          </div>
        </div>

        <h2 className='text-2xl font-bold mb-6 mt-5 mx-5'> {currentQuestion + 1}-{questions[currentQuestion].text}</h2>
        <div className='flex flex-col'>
          {questions[currentQuestion].options.map((option) => (
            <button
              key={option.id}
              id={`option-${option.id}`}
              onClick={() => handleAnswerSelect(option.id)}
              disabled={isAnswered || timer === 0}
              className={`py-2 mt-2 px-4 mb-2 text-lg rounded-xl hover:bg-indigo-400 hover:text-white bg-white text-black border-2 border-gray-300`}
            >
              {option.text}
            </button>
          ))}
        </div>

        {isModalOpen && (
          <QuizModal
            isCorrect={isCorrect}
            correctAnswer={questions[currentQuestion]?.options.find((option) => option.isCorrect)?.text}
          />
        )}
      </div>
    </div>
  );
}
