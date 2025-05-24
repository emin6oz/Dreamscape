import React, { useState } from 'react';
import HappyIcon from './emoji/HappyIcon';
import NeutralIcon from './emoji/NeutralIcon';
import SadIcon from './emoji/SadIcon';

const HowWasSleep = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (mood) => {
    setSelected(mood);
  };

  const iconStyle = (mood) => ({
    cursor: 'pointer',
    transition: 'filter 0.3s ease',
    filter: selected === mood ? 'invert(63%) sepia(96%) saturate(1067%) hue-rotate(4deg) brightness(108%) contrast(107%)' : 'none'
  });

  return (
    <div className="flex flex-col items-center justify-center bg-[#6E8BC3] rounded-2xl p-6 mt-10 w-[400px] mx-auto">
      <h2 className="text-white font-semibold text-xl mb-6">How was your sleep?</h2>
      <div className="flex gap-6 mb-4">
        <div onClick={() => handleSelect('happy')} style={iconStyle('happy')}>
          <HappyIcon />
        </div>
        <div onClick={() => handleSelect('neutral')} style={iconStyle('neutral')}>
          <NeutralIcon />
        </div>
        <div onClick={() => handleSelect('sad')} style={iconStyle('sad')}>
          <SadIcon />
        </div>
      </div>
      {selected && (
        <p className="text-white text-lg">You selected: {selected}</p>
      )}
    </div>
  );
};

export default HowWasSleep;
