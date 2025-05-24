import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from "../../components/BackButton";

export default function NotificationPermission() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#070B26] text-white flex flex-col justify-between p-6 text-center relative">
      <BackButton />

      <div className="flex flex-col items-center mt-20">
        <div className="mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="88" viewBox="0 0 70 88" fill="none">
            <path d="M4.37502 74.375C3.13543 74.375 2.0971 73.955 1.26002 73.115C0.422932 72.275 0.00293175 71.2367 1.50862e-05 70C-0.00290158 68.7633 0.417099 67.725 1.26002 66.885C2.10293 66.045 3.14127 65.625 4.37502 65.625H8.75001V35C8.75001 28.9479 10.5729 23.5711 14.2188 18.8694C17.8646 14.1677 22.6042 11.0863 28.4375 9.62501V6.56251C28.4375 4.73959 29.0763 3.19084 30.3538 1.91626C31.6313 0.641676 33.18 0.00292661 35 9.94318e-06C36.82 -0.00290672 38.3702 0.635843 39.6506 1.91626C40.9311 3.19668 41.5684 4.74543 41.5625 6.56251V9.62501C47.3959 11.0833 52.1354 14.1648 55.7813 18.8694C59.4271 23.574 61.25 28.9508 61.25 35V65.625H65.625C66.8646 65.625 67.9044 66.045 68.7444 66.885C69.5844 67.725 70.0029 68.7633 70 70C69.9971 71.2367 69.5771 72.2765 68.74 73.1194C67.9029 73.9623 66.8646 74.3808 65.625 74.375H4.37502ZM35 87.5C32.5938 87.5 30.5346 86.644 28.8225 84.9319C27.1104 83.2198 26.2529 81.1592 26.25 78.75H43.75C43.75 81.1563 42.894 83.2169 41.1819 84.9319C39.4698 86.6469 37.4092 87.5029 35 87.5Z" fill="#F4F4F4"/>
          </svg>
        </div>
        <h1 className="text-xl font-bold mb-2">Notification Permission Requested</h1>
        <p className="text-sm text-gray-300 max-w-xs">
          We ask you for notification permission to send you sleep reminders, not spam.
        </p>
      </div>

      <button
        onClick={() => navigate('/scan')}
        className="bg-white text-black font-bold py-4 rounded-full mt-10"
      >
        Allow
      </button>
    </div>
  );
}
