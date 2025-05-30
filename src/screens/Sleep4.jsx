import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from "../components/BackButton";

export default function Sleep4() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const options = [
    "Well rested",
    "Not bad",
    "Average",
    "Barely sleep",
    "More tired than before sleep"
  ];

  return (
    <div className="min-h-screen bg-[#070B26] text-white flex flex-col justify-between p-6 relative">
      <BackButton />
      <div>
        <h1 className="text-xl font-bold text-center mb-8">
          Do you wake up feeling well rested?
        </h1>
        <div className="flex flex-col gap-4">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => setSelected(opt)}
              className={`py-4 px-6 rounded-xl font-semibold w-full transition-all duration-200 ${
                selected === opt ? 'bg-[#6D83AB]' : 'bg-[#101839]'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={() => navigate('/mic-permission')}
        disabled={!selected}
        className={`mt-10 py-4 rounded-full font-bold w-full transition-all duration-200 ${
          !selected ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-white text-black'
        }`}
      >
        Next
      </button>
    </div>
  );
}
