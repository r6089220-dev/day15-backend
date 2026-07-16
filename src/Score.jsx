import React, { useState } from "react";

function Score() {
  const [score, setScore] = useState(0);
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-2xl shadow-gray-200 text-center w-auto">
        <h1 className="text-2xl font-bold text-gray-700 mb-2">Cricket Score</h1>
          <p className="hidden text-gray-500 mb-6">
          Cricket Score using <span className="font-bold">useState()</span>
        </p>
      
        <h1 className="text-7xl font-extrabold text-blue-600 mb-8">{score}</h1>

        <button
          className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-200 text-white px-8 py-3 rounded-full text-2xl font-bold shadow-[10px_10px_20px_rgba(0,0,0,0.8)] m-2 uppercase"
          onClick={() => {
            setScore(score + 1);
          }}
        >
          Increment
        </button>
        <button
          className="uppercase bg-green-600 hover:bg-green-700 active:scale-95 transition-all duration-200 text-white px-8 py-3 rounded-full text-2xl font-bold shadow-[10px_10px_20px_rgba(0,0,0,0.8)] m-2"
          onClick={() => {
            setScore(score > 0 ? score - 1 : 0);
          }}
        >
          Decrement
        </button>
        <br />
        <button
          className="bg-red-600 hover:bg-red-700 active:scale-95 transition-all duration-200 text-white px-8 py-3 rounded-full text-2xl font-bold shadow-[10px_10px_20px_rgba(0,0,0,0.8)] m-2"
          onClick={() => {
            setScore(0);
          }}
        >
          RESET
        </button>
      </div>
    </div>
  );
}

export default Score;
