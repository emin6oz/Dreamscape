import React, { useState } from 'react';

const VariantButtons = () => {
  const [isRelaxed, setIsRelaxed] = useState(true);

  const handleClick = () => {
    setIsRelaxed(!isRelaxed);
  };

  return (
    <div className="flex justify-center items-center h-full p-10">
      <button
        onClick={handleClick}
        className={`px-8 py-4 rounded-xl w-64 font-semibold shadow-md transition-all duration-200 ${
          isRelaxed
            ? 'bg-[#0A0F39] text-white'
            : 'bg-[#738DC5] text-white'
        }`}
      >
        Button
      </button>
    </div>
  );
};

export default VariantButtons;
