import React from 'react';
import ToggleSwitch from '../components/ToggleSwitch';

const TogglePage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8">
      <ToggleSwitch />
      <ToggleSwitch />
    </div>
  );
};

export default TogglePage;
