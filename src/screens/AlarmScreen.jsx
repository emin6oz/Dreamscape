import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HowWasSleep from "../components/howWasSleep";
import { useNavigate } from "react-router-dom";

const AlarmScreen = () => {
  const [isAwake, setIsAwake] = useState(false);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(new Date());
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const tick = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(tick);
  }, []);

  const startHolding = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          setIsAwake(true);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
  };

  const stopHolding = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setProgress(0);
  };

  const hours = time.getHours();
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  return (
    <div className="min-h-screen bg-[#0A0F39] text-white flex flex-col items-center justify-center px-6 text-center">
      <div className="text-6xl font-bold">
        {hours % 12 || 12}:{minutes} <span className="text-xl">{ampm}</span>
      </div>
      <div className="text-lg font-medium mt-2">Wednesday, January 8</div>

      {/* ✅ Clickable sound line */}
      <div
        onClick={() => navigate("/music")}
        className="flex items-center justify-between w-full max-w-xs mt-6 cursor-pointer hover:opacity-80 transition"
      >
        <div>🎵 Sound</div>
        <div className="flex items-center gap-2">
          <span>Alarm</span>
          <span className="font-bold">8:00 AM</span>
        </div>
      </div>

      {/* ✅ Wake up button */}
      {!isAwake ? (
        <div
          onMouseDown={startHolding}
          onMouseUp={stopHolding}
          onTouchStart={startHolding}
          onTouchEnd={stopHolding}
          className="mt-10 bg-gray-600 w-full max-w-xs h-12 rounded-full overflow-hidden relative"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'easeInOut', duration: 0.2 }}
            className="absolute top-0 left-0 h-full bg-yellow-400"
          />
          <div className="relative z-10 h-full flex items-center justify-center font-semibold text-black">
            Long press to wake up
          </div>
        </div>
      ) : (
        <AnimatePresence>
          <motion.div
            className="mt-10 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HowWasSleep />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default AlarmScreen;
