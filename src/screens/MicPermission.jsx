import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from "../components/BackButton";

export default function MicPermission() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#070B26] text-white flex flex-col justify-between p-6 text-center relative">
      <BackButton />

      <div className="flex flex-col items-center mt-20">
        <div className="mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="67" height="84" viewBox="0 0 67 84" fill="none">
            <path d="M33.6875 0.75C37.4171 0.75 40.994 2.13281 43.6312 4.59422C46.2684 7.05564 47.75 10.394 47.75 13.875V40.125C47.75 43.606 46.2684 46.9444 43.6312 49.4058C40.994 51.8672 37.4171 53.25 33.6875 53.25C29.9579 53.25 26.381 51.8672 23.7438 49.4058C21.1066 46.9444 19.625 43.606 19.625 40.125V13.875C19.625 10.394 21.1066 7.05564 23.7438 4.59422C26.381 2.13281 29.9579 0.75 33.6875 0.75ZM66.5 40.125C66.5 55.5687 54.2656 68.3 38.375 70.4437V83.875H29V70.4437C13.1094 68.3 0.875 55.5687 0.875 40.125H10.25C10.25 45.9266 12.7193 51.4906 17.1147 55.593C21.5101 59.6953 27.4715 62 33.6875 62C39.9035 62 45.8649 59.6953 50.2603 55.593C54.6557 51.4906 57.125 45.9266 57.125 40.125H66.5Z" fill="#F4F4F4"/>
          </svg>
        </div>
        <h1 className="text-xl font-bold mb-2">Microphone permission requested</h1>
        <p className="text-sm text-gray-300 max-w-xs">
          Microphone permission is indispensable to track and analyze your sleep quality.
        </p>
      </div>

      <button
        onClick={() => navigate('/notification-permission')}
        className="bg-white text-black font-bold py-4 rounded-full mt-10"
      >
        Allow
      </button>
    </div>
  );
}
