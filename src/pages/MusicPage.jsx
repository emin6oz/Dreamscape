import { FaBed, FaRegUser } from "react-icons/fa";
import { MdOutlineSensors } from "react-icons/md";
import { BiBarChartAlt2 } from "react-icons/bi";
import { FaPlay } from "react-icons/fa6";

// Now using real aesthetic image URLs
const musicList = [
  { title: "Dreamy", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
  { title: "Star Dreams", image: "https://images.unsplash.com/photo-1517817748498-89b0fadc9623" },
  { title: "Rainfall", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2" },
  { title: "Cosmic Calm", image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" },
  { title: "Night Breeze", image: "https://images.unsplash.com/photo-1529676468690-efcfa4c29c2d" },
  { title: "Relaxation", image: "https://images.unsplash.com/photo-1504198266285-1659872e6590" },
];

const MusicPage = () => {
  return (
    <div className="min-h-screen bg-[#0A0F24] text-white flex flex-col">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-auto px-5 pt-5 pb-52">
        {/* Header */}
        <h2 className="text-center text-xl font-bold leading-snug mb-6">
          Listen to personalized playlists<br />
          to improve your sleep quality.
        </h2>

        {/* Picked for you */}
        <h3 className="text-md font-semibold mb-2">Picked for you</h3>
        <div className="bg-[#6D83AB] rounded-xl p-3 flex items-center gap-4 mb-6">
          <img
            src="https://images.unsplash.com/photo-1517817748498-89b0fadc9623"
            alt="Deep Sleep Tones"
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div className="flex-1">
            <h4 className="font-bold">Deep Sleep Tones</h4>
            <p className="text-sm text-white/80">
              ambient drones designed to help you fall into a deep, restorative sleep.
            </p>
          </div>
          <button className="bg-white text-[#0A0F24] w-9 h-9 rounded-full flex items-center justify-center">
            <FaPlay />
          </button>
        </div>

        {/* Browse All */}
        <h3 className="text-md font-semibold mb-3">Browse all</h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {musicList.map((item, i) => (
            <div key={i} className="bg-[#6D83AB] rounded-lg overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-20 object-cover" />
              <div className="px-2 py-2 font-semibold text-sm">{item.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Music Player Bar */}
      <div className="fixed bottom-16 left-4 right-4 bg-[#6D83AB] px-4 py-3 rounded-2xl flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
            🎵
          </div>
          <div>
            <div className="text-sm font-semibold">Sailor song</div>
            <div className="text-xs text-white/80">Gigi Perez</div>
          </div>
        </div>
        <button className="bg-white text-[#0A0F24] w-8 h-8 rounded-full flex items-center justify-center">
          <FaPlay />
        </button>
      </div>

      {/* Bottom Navigation */}
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

export default MusicPage;
