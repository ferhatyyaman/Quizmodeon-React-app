import React from 'react'

export default function Header({ username, score, rank }) {
  return (
    <div className="flex items-center justify-between mb-6 bg-indigo-400 p-3 rounded-b-xl">
    <div className="flex items-center">
      <img src={"https://static.vecteezy.com/system/resources/previews/002/002/427/non_2x/man-avatar-character-isolated-icon-free-vector.jpg"} alt="User Avatar" 
      className="w-10 h-10 rounded-full mx-5" />
      <span className="text-lg font-bold">{username}</span>
    </div>
    <div className="flex flex-row items-center text-right">
     <div>
        <p className="text-lg mx-5 underline decoration-solid">Score</p>
        <p className="text-lg mx-5 text-center">{score}</p>
     </div>
      <div>
        <p className="text-lg mx-5 underline decoration-solid">Rank</p>
        <p className="text-lg mx-5 text-center">{rank}</p>
      </div>
    </div>
  </div>
  )
}
