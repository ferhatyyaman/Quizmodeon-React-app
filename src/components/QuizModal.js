import React from 'react'

export default function QuizModal({ isCorrect, correctAnswer}) {
  return (
    <div className='bg-red-500 absolute top-0 px-20 rounded-b-lg'>
    <div className='items-center justify-center'>
      <div className={`px-96 py-4 ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
        <p>{isCorrect ? 'Correct!' : 'Incorrect!'}</p>
        {isCorrect ? (
          <p>Doğru cevap</p>
        ) : (
          <p>Yanlış Cevap: {correctAnswer}</p>
        )}
      </div>
    </div>
  </div>
  )
}
