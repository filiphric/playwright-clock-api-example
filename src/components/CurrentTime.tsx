'use client'

import React, { useState, useEffect } from 'react';

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true 
      }));
    };

    updateTime(); // Set initial time
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold text-white mb-2">Current Time</h2>
      <div className="bg-white bg-opacity-20 rounded-md p-4">
        <p className="text-4xl font-mono text-white text-center" aria-label='Current time'>
          {currentTime}
        </p>
      </div>
    </div>
  );
}

export default CurrentTime;