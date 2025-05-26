import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from "../components/BackButton";

export default function Sleep2() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const options = ["Over 8 hours", "6–8 hours", "5–6 hours", "3–5 hours", "Less than 3 hours"];

  return (
    <div className="min-h-screen bg-[#070B26] text-white flex flex-col justify-between p-6 relative">
      <BackButton />
      <div>
        <h1 className="text-xl font-bold text-center mb-8">How many hours do you sleep every night?</h1>
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
        onClick={() => navigate('/sleep3')} 
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

