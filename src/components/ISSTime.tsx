"use client";

import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchISSTime = async () => {
  const response = await fetch('http://worldtimeapi.org/api/timezone/Etc/UTC');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const ISSTime: React.FC = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['issTime'],
    queryFn: fetchISSTime,
    refetchInterval: 1000,
  });

  if (isLoading) return <div>Loading ISS time...</div>;
  if (isError) return <div>Error: {(error as Error).message}</div>;

  const issTime = new Date(data.datetime);
  const formattedTime = issTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'UTC',
    hour12: false,
  });

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold text-white mb-2">Current Time on ISS (UTC)</h2>
      <div className="bg-white bg-opacity-20 rounded-md p-4">
        <p className="text-4xl font-mono text-white text-center" aria-label='Current time on ISS'>
          {formattedTime}
        </p>
      </div>
    </div>
  );
};

export default ISSTime;