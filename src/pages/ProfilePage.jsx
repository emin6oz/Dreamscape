import { FaBed, FaRegUser } from "react-icons/fa";
import { MdOutlineSensors } from "react-icons/md";
import { BiBarChartAlt2 } from "react-icons/bi";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-[#0A0F24] text-white flex flex-col justify-between">
      <div className="p-6">
        {/* Profile Pic + Welcome */}
        <div className="flex flex-col items-center space-y-2 mb-8">
          <img
            src="https://i.pravatar.cc/150?img=15"
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <h2 className="text-2xl font-bold">Welcome!</h2>
        </div>

        {/* Challenges */}
        <h3 className="text-xl font-semibold mb-3">Your challenges</h3>
        <div className="bg-[#131735] rounded-2xl p-4 mb-8 grid grid-cols-2 gap-4">
          {/* Challenge 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-16 h-16 mb-2">
              <svg className="w-full h-full rotate-[-90deg]">
                <circle cx="32" cy="32" r="28" stroke="#C1C1C1" strokeWidth="8" fill="none" />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#FBD115"
                  strokeWidth="8"
                  strokeDasharray={`${(50 / 100) * 175.84}, 175.84`}
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-sm font-bold">50%</div>
            </div>
            <p className="text-sm">You listened calming sounds 5/10 days in a row</p>
          </div>

          {/* Challenge 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-16 h-16 mb-2">
              <svg className="w-full h-full rotate-[-90deg]">
                <circle cx="32" cy="32" r="28" stroke="#C1C1C1" strokeWidth="8" fill="none" />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#FBD115"
                  strokeWidth="8"
                  strokeDasharray={`${(90 / 100) * 175.84}, 175.84`}
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-sm font-bold">90%</div>
            </div>
            <p className="text-sm">You tracked your sleep 9/10 days in a row</p>
          </div>
        </div>

        {/* Settings */}
        <h3 className="text-xl font-semibold mb-3">Settings</h3>
        <div className="bg-[#131735] rounded-2xl p-4 space-y-4 text-base">
          <div className="border-b border-white/20 pb-2 font-semibold">General settings</div>
          <div className="border-b border-white/20 pb-2">Language</div>
          <div className="flex items-center justify-between border-b border-white/20 pb-2">
            <span>Apple Health</span>
            <div className="w-11 h-6 flex items-center bg-green-500 rounded-full p-1 cursor-pointer">
              <div className="bg-white w-4 h-4 rounded-full shadow-md transform translate-x-5"></div>
            </div>
          </div>
          <div className="pt-2 text-red-400 font-semibold">Log out</div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 w-full bg-[#0A0F24] border-t border-white/10 py-3 px-6 flex justify-between text-xs text-white/70">
        <div className="flex flex-col items-center">
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
        <div className="flex flex-col items-center text-white">
          <FaRegUser className="text-lg" />
          Profile
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
