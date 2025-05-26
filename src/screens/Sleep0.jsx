import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from "../components/BackButton";

const options = [
  "Improve sleep quality",
  "Fall asleep faster",
  "Know my sleep patterns",
  "Get recommendations connected with IKEA products",
  "Relax"
];

export default function Sleep0() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();

  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  const handleNext = () => {
    console.log("Selected expectations:", selectedOptions);
    navigate('/Sleep1'); // make sure this matches your route name
  };

  return (
    <div className="min-h-screen bg-[#070B26] text-white flex flex-col justify-between p-6 pt-14 relative">
      {/* Back button */}
      <div className="absolute top-6 left-6 z-10">
        <BackButton />
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-center mb-8 px-4">
        What do you expect from this app?
      </h1>

      {/* Option Buttons */}
      <div className="flex flex-col gap-4">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => toggleOption(option)}
            className={`py-4 px-6 rounded-xl text-center font-semibold transition-all duration-200 w-full ${
              selectedOptions.includes(option)
                ? 'bg-[#6D83AB]'
                : 'bg-[#101839]'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={selectedOptions.length === 0}
        className={`mt-10 py-4 rounded-full font-bold w-full transition-all duration-200 ${
          selectedOptions.length === 0
            ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
            : 'bg-white text-black'
        }`}
      >
        Next
      </button>
    </div>
  );
}
