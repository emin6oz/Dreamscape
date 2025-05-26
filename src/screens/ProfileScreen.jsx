import React, {useEffect, useState} from 'react';
import { FaBed, FaRegUser } from "react-icons/fa";
import { MdOutlineSensors } from "react-icons/md";
import { BiBarChartAlt2 } from "react-icons/bi"; 
import ToggleSwitch from '../components/toggleSwitch';
import './profileScreen.scss';


const ChallengeCircle = ({ percentage, label }) => {
  const [dashOffset, setDashOffset] = useState(175.84);

 useEffect(() => {
  const timeout = setTimeout(() => {
    setDashOffset(175.84 * (1 - percentage / 100));
  }, 100); // slight delay to trigger animation

  return () => clearTimeout(timeout);
}, [percentage]);
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-16 h-16 mb-2">
        <svg className="w-full h-full rotate-[-90deg]">
          <circle cx="32" cy="32" r="28" stroke="#C1C1C1" strokeWidth="8" fill="none" />
        <circle
  className="animated-ring"
  cx="32"
  cy="32"
  r="28"
  stroke="#FBD115"
  strokeWidth="8"
  fill="none"
  strokeDasharray="175.84"
  strokeDashoffset={dashOffset}
  strokeLinecap="round"
/>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-sm font-bold">
          {percentage}%
        </div>
      </div>
      <p className="text-sm">{label}</p>
    </div>
  );
};

const ProfileScreen = () => {
  return (
    <div className="min-h-screen bg-[#0A0F24] text-white flex flex-col justify-between">
      <div className="p-6">
        <div className="flex flex-col items-center space-y-2 mb-8">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="User avatar"
            className="w-20 h-20 rounded-full"
          />
          <h2 className="text-2xl font-bold">Welcome!</h2>
        </div>

        <h3 className="text-xl font-semibold mb-3">Your challenges</h3>
        <div className="bg-[#131735] rounded-2xl p-4 mb-8 grid grid-cols-2 gap-4">
          <ChallengeCircle percentage={50} label="You listened calming sounds 5/10 days in a row" />
          <ChallengeCircle percentage={90} label="You tracked your sleep 9/10 days in a row" />
        </div>

        <h3 className="text-xl font-semibold mb-3">Settings</h3>
        <div className="bg-[#131735] rounded-2xl p-4 space-y-4 text-base">
          <div className="border-b border-white/20 pb-2 font-semibold">General settings</div>
          <div className="border-b border-white/20 pb-2">Language</div>
          <div className="flex items-center justify-between border-b border-white/20 pb-2">
            <span>Apple Health</span>
            <ToggleSwitch />
          </div>
          <div className="pt-2 text-red-400 font-semibold">Log out</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;