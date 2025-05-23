import React from 'react';
import { FaBed } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';
import { BsPencil } from 'react-icons/bs';
import './sleepScreen.scss';

const SleepScreen = () => {
  return (
    <div className="sleep-screen">
      <h1 className="title">Sleep tracker</h1>

      <div className="circular-chart">
        <svg width="220" height="220" viewBox="0 0 220 220">
  <circle
    cx="110"
    cy="110"
    r="100"
    stroke="#5F6C92" // gray background
    strokeWidth="20"
    fill="none"
  />
  <circle
    cx="110"
    cy="110"
    r="100"
    stroke="#FBD115"
    strokeWidth="20"
    fill="none"
    strokeDasharray={`${2 * Math.PI * 100}`} 
    strokeDashoffset={`${2 * Math.PI * 100 * (1 - 0.75)}`} 
    strokeLinecap="round"
    transform="rotate(-90 110 110)" 
  />
</svg>

      </div>

      <div className="time-settings">
        <div className="setting-row">
          <FaBed className="icon" />
          <span>Bedtime</span>
          <span className="time">12:00 AM</span>
          <BsPencil className="edit-icon" />
        </div>
        <div className="setting-row">
          <MdAccessTime className="icon" />
          <span>Alarm</span>
          <span className="time">8:00 AM</span>
          <BsPencil className="edit-icon" />
        </div>
      </div>

      <button className="sleep-btn">Sleep Now</button>

      <div className="bottom-nav">
        <div className="tab active">Sleep</div>
        <div className="tab">Scan</div>
        <div className="tab">Statistics</div>
        <div className="tab">Profile</div>
      </div>
    </div>
  );
};

export default SleepScreen;
