import React, { useState } from 'react';

const SleepPage = () => {
  const [isSleeping, setIsSleeping] = useState(false);

  const handleSleep = () => setIsSleeping(true);
  const handleWake = () => setIsSleeping(false);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-6 text-white">
      {!isSleeping ? (
        <button
          onClick={handleSleep}
          className="bg-white text-blue-900 font-bold px-8 py-3 rounded-full shadow-md transition-all hover:scale-105"
        >
          Sleep Now
        </button>
      ) : (
        <button
          onClick={handleWake}
          className="bg-gray-400 text-blue-900 font-bold px-8 py-3 rounded-full shadow-md transition-all hover:scale-105"
        >
          Wake Up
        </button>
      )}
    </div>
  );
};

export default SleepPage;
