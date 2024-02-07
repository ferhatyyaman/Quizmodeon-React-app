import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();


  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleStartQuiz = () => {
    if (username.trim() !== '') {
      navigate('/quiz', { state: { username } });
    } else {
      console.log("kullanıcı girilmei")
    }
  };

    return (
      <div className="flex flex-col items-center h-screen ">
      <Link to="/">
        <img src="https://store-images.s-microsoft.com/image/apps.7291.43934376-997a-455f-85f7-d51e78b0bd6c.330380d1-aa90-44ed-aa70-21aef9e7c242.c2867135-a57f-4a33-83cf-b8332b809709.png" alt="Logo" 
        className="w-48 h-48 mb-4 mt-10" />
      </Link>

      <p className="text-lg">My Quiz</p> 
      <p className="text-base">5 Questions</p>

      <img src="https://static.vecteezy.com/system/resources/previews/002/002/427/non_2x/man-avatar-character-isolated-icon-free-vector.jpg" alt="User Avatar" 
      className="w-48 h-48 rounded-full mb-4" />

      <input
        type="text"
        placeholder="Your Name"
        value={username}
        onChange={handleUsernameChange}
        className="border-2 border-slate-300 p-2 mb-4 w-80"
      />

      <button
        onClick={handleStartQuiz}
        className="bg-indigo-400 text-white py-2 mt-5 px-10 rounded-lg"
      >
        Join
      </button>
    </div>
      );
    };
