import React from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';
import { FaTrophy } from "react-icons/fa";
import ReactConfetti from 'react-confetti';

export default function Result({ score, totalQuestions, selectedAnswers }) {


  return (
    <div className="container mx-auto text-center max-w-screen-lg ">
        <Header score={score}  />
        <div className="flex flex-col items-center">
        <img src="https://store-images.s-microsoft.com/image/apps.7291.43934376-997a-455f-85f7-d51e78b0bd6c.330380d1-aa90-44ed-aa70-21aef9e7c242.c2867135-a57f-4a33-83cf-b8332b809709.png" alt="Logo" 
        className="w-28 h-28 mb-4 mt-10" />
        </div>
        <h2 className="text-2xl font-bold mb-6">High Scores</h2>

     <div className="flex justify-between text-xl font-bold mb-4 p-5 mx-32 bg-slate-100 rounded-lg">
        
        <div className="flex flex-row items-center">
        <img src={"https://static.vecteezy.com/system/resources/previews/002/002/427/non_2x/man-avatar-character-isolated-icon-free-vector.jpg"} alt="User Avatar" 
        className="w-20 h-20 rounded-full mx-5" />
        <span className="text-lg font-bold">name</span>
      </div>
      <div className="flex flex-row items-center text-right">
     <div>
        <p className="text-lg mx-5">Score</p>
        <p className="text-lg mx-5 text-center">{score}</p>
     </div>
     <div>
        <p className="text-lg mx-5 pt-1 px-1"><FaTrophy /></p>
        <p className="text-lg mx-5 text-center mt-1.5">1</p>
      </div>
     </div>
     <ReactConfetti/>
     </div>

      <Link to="/" className="bg-indigo-400 text-white py-2 px-4 mt-6 rounded-lg inline-block">
        Go to Home
      </Link>
    </div>
  )
}
