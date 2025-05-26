import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="absolute top-6 left-4 z-10">
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="42" viewBox="0 0 21 42" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.91286 19.7698L15.8126 9.87003L18.2871 12.3445L9.62461 21.007L18.2871 29.6695L15.8126 32.144L5.91286 22.2443C5.58478 21.9161 5.40048 21.4711 5.40048 21.007C5.40048 20.543 5.58478 20.098 5.91286 19.7698Z" fill="#F4F4F4"/>
      </svg>
    </button>
  );
}
