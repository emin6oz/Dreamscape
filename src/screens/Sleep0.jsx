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

export default function Expectations() {
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
    navigate('/sleep1'); // ✅ FIXED
  };

  return (
    <div className="min-h-screen bg-[#070B26] text-white flex flex-col justify-between px-6 py-10 relative">
      <BackButton />

      <div>
        <h1 className="text-2xl font-bold text-center mb-10">
          What do you expect from this app?
        </h1>

        <div className="flex flex-col gap-4">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => toggleOption(option)}
              className={`w-full py-4 px-6 rounded-2xl text-center font-semibold shadow-sm transition-all duration-200 ${
                selectedOptions.includes(option)
                  ? 'bg-[#6D83AB]'
                  : 'bg-[#101839]'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        disabled={selectedOptions.length === 0}
        className={`mt-10 py-4 w-full rounded-full font-bold text-lg transition-all duration-200 ${
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
