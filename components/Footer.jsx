import React from 'react';
import { FaBed, FaCamera, FaChartBar, FaUser } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-white text-zinc-800 border-t border-zinc-200 shadow-sm">
      <div className="flex justify-around items-center py-2 text-xs">
        <div className="flex flex-col items-center">
          <FaBed className="text-lg" />
          <span>Sleep</span>
        </div>
        <div className="flex flex-col items-center">
          <FaCamera className="text-lg" />
          <span>Scan</span>
        </div>
        <div className="flex flex-col items-center">
          <FaChartBar className="text-lg" />
          <span>Statistics</span>
        </div>
        <div className="flex flex-col items-center">
          <FaUser className="text-lg" />
          <span>Profile</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
