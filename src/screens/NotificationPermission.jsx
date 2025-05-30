import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from "../components/BackButton";

export default function NotificationPermission({ onAllow }) {
  const navigate = useNavigate();

  const handleAllow = () => {
    localStorage.setItem("loggedIn", "true");
    if (onAllow) onAllow(); // update App state
    navigate("/"); // now it will open SleepScreen
  };

  return (
    <div className="min-h-screen bg-[#070B26] text-white flex flex-col justify-between p-6 text-center relative">
      <BackButton />
      <div className="flex flex-col items-center mt-20">
        <div className="mb-6">
          {/* (your SVG icon here) */}
        </div>
        <h1 className="text-xl font-bold mb-2">Notification Permission Requested</h1>
        <p className="text-sm text-gray-300 max-w-xs">
          We ask you for notification permission to send you sleep reminders, not spam.
        </p>
      </div>

      <button
        onClick={handleAllow}
        className="bg-white text-black font-bold py-4 rounded-full mt-10"
      >
        Allow
      </button>
    </div>
  );
}

