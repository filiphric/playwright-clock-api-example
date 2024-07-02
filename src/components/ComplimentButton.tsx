'use client'
import React, { useState, useEffect } from 'react';

const compliments = [
  "You're awesome!",
  "You make the world a better place.",
  "Your smile is contagious.",
  "You're a great listener.",
  "You bring out the best in others.",
  "You have a great sense of humor.",
  "You're one of a kind!",
  "You're inspiring.",
  "You're a true friend.",
  "Your positivity is infectious."
];

function ComplimentButton() {
  const [compliment, setCompliment] = useState('');
  const [showCompliment, setShowCompliment] = useState(false);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (showCompliment) {
      timer = setTimeout(() => {
        setShowCompliment(false);
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [showCompliment]);

  const handleClick = () => {
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    setCompliment(randomCompliment);
    setShowCompliment(true);
  };

  return (
    <div className="text-center">
      <button 
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
      >
        Give me a compliment
      </button>
      {showCompliment && (
        <div className="mt-4 p-4 bg-yellow-100 text-yellow-800 rounded-lg shadow-md transition-opacity duration-300" aria-label="Compliment">
          {compliment}
        </div>
      )}
    </div>
  );
}

export default ComplimentButton;