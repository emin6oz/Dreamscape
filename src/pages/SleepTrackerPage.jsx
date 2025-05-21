import { useState } from "react";
import { FaBed, FaRegClock, FaRegEdit, FaRegUser } from "react-icons/fa";
import { MdOutlineSensors } from "react-icons/md";
import { BiBarChartAlt2 } from "react-icons/bi"; 
import moonIcon from '../../public/moon.svg';
import sunIcon from '../../public/sun.svg';


const SleepTrackerPage = () => {
  const [bedtime, setBedtime] = useState("00:00");
  const [alarmTime, setAlarmTime] = useState("08:00");
  const [editing, setEditing] = useState(null); // 'bedtime' or 'alarm'
  const [isSleeping, setIsSleeping] = useState(false);


  return (
    <div className="min-h-screen bg-[#0B0E24] text-white flex flex-col justify-between">
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-center mb-8">Sleep tracker</h1>

        <div className="relative w-60 h-60 mx-auto rounded-full mb-10"
     style={{ background: "conic-gradient(#fac105 75%, #4f46e5 75% 100%)" }}>

  {/* Decorative white circle */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-52 h-52 bg-[#0B0E24] rounded-full"></div>
  </div>

  {/* Time labels (extra spacing) */}
 <div className="absolute top-[-32px] left-1/2 transform -translate-x-1/2 text-sm text-white">12AM</div>
 <div className="absolute bottom-[-32px] left-1/2 transform -translate-x-1/2 text-sm text-white">12PM</div>
 <div className="absolute top-1/2 left-[-40px] transform -translate-y-1/2 text-sm text-white">6PM</div>
 <div className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 text-sm text-white">6AM</div>


 </div>


        {/* Bedtime and Alarm */}
        <div className="space-y-6 text-lg">
          {/* Bedtime */}
          <div className="flex justify-between items-center px-2">
            <div className="flex items-center gap-2">
              <FaBed /> <span className="font-semibold">Bedtime</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              {editing === "bedtime" ? (
                <input
                  type="time"
                  value={bedtime}
                  onChange={(e) => setBedtime(e.target.value)}
                  onBlur={() => setEditing(null)}
                  className="bg-transparent border-b border-white focus:outline-none"
                />
              ) : (
                <>
                  <span>{bedtime}</span>
                  <FaRegEdit
                    className="text-sm cursor-pointer"
                    onClick={() => setEditing("bedtime")}
                  />
                </>
              )}
            </div>
          </div>

          <div className="border-t border-white/20"></div>

          {/* Alarm */}
          <div className="flex justify-between items-center px-2">
            <div className="flex items-center gap-2">
              <FaRegClock /> <span className="font-semibold">Alarm</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              {editing === "alarm" ? (
                <input
                  type="time"
                  value={alarmTime}
                  onChange={(e) => setAlarmTime(e.target.value)}
                  onBlur={() => setEditing(null)}
                  className="bg-transparent border-b border-white focus:outline-none"
                />
              ) : (
                <>
                  <span>{alarmTime}</span>
                  <FaRegEdit
                    className="text-sm cursor-pointer"
                    onClick={() => setEditing("alarm")}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sleep Now Button */}
      <div className="px-6 mb-20">
     <button
      onClick={() => setIsSleeping(!isSleeping)}
     className={`w-full py-4 rounded-full font-bold text-lg shadow-md transition-all hover:scale-105 ${
      isSleeping ? 'bg-gray-400 text-blue-900' : 'bg-white text-blue-900'
     }`}
     >
     {isSleeping ? 'Wake Up' : 'Sleep Now'}
     </button>
      </div>


      {/* Bottom Nav */}
      <div className="fixed bottom-0 w-full bg-[#0B0E24] border-t border-white/10 py-3 px-6 flex justify-between text-xs text-white/70">
        <div className="flex flex-col items-center text-white">
          <FaBed className="text-lg" />
          Sleep
        </div>
        <div className="flex flex-col items-center">
          <MdOutlineSensors className="text-lg" />
          Scan
        </div>
        <div className="flex flex-col items-center">
          <BiBarChartAlt2 className="text-lg" />
          Statistics
        </div>
        <div className="flex flex-col items-center">
          <FaRegUser className="text-lg" />
          Profile
        </div>
      </div>
    </div>
  );
};

export default SleepTrackerPage;
