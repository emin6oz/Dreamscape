import { useRef, useState } from "react";
import { FaBed, FaRegUser } from "react-icons/fa";
import { MdOutlineSensors } from "react-icons/md";
import { BiBarChartAlt2 } from "react-icons/bi";
import { FaPlay, FaPause } from "react-icons/fa6";
import '../styles/musicScreen.scss';

const musicList = [
  {
    title: "Dreamy",
    image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&h=640"
  },
  {
    title: "Star Dreams",
    image: "https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&h=640"
  },
  {
    title: "Rainfall",
    image: "https://images.pexels.com/photos/110874/pexels-photo-110874.jpeg?auto=compress&cs=tinysrgb&h=640"
  },
  {
    title: "Cosmic Calm",
    image: "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&h=640"
  },
  {
    title: "Night Breeze",
    image: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&h=640"
  },
  {
    title: "Relaxation",
    image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&h=640"
  }
];

const MusicScreen = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-[#0A0F24] text-white flex flex-col">
      <div className="flex-1 overflow-auto px-5 pt-5 pb-52">
        <h2 className="text-center text-xl font-bold leading-snug mb-6">
          Listen to personalized playlists<br />
          to improve your sleep quality.
        </h2>

        <div className="mb-6">
          <h2 className="text-base font-semibold mb-2">Picked for you</h2>

          <div className="bg-[#5A77B4] p-4 rounded-2xl flex items-center gap-4 h-28">
            <img
              src="https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&h=640"
              alt="Chill Beats"
              className="w-20 h-20 rounded-lg object-cover"
            />

            <div className="flex-1">
              <p className="text-white font-bold text-sm">Chill Beats</p>
              <p className="text-white/80 text-xs leading-tight mt-1 pr-2">
                relaxing lo-fi ambient music to help you sleep peacefully
              </p>
            </div>

            <button
              onClick={handleTogglePlay}
              className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md"
            >
              {isPlaying ? (
                <FaPause className="w-4 h-4 text-[#5A77B4]" />
              ) : (
                <FaPlay className="w-4 h-4 text-[#5A77B4]" />
              )}
            </button>
          </div>

          <audio
            ref={audioRef}
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
          />
        </div>

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
      <div className="fixed bottom-16 left-2 right-4 bg-[#6D83AB] px-4 py-3 rounded-2xl flex justify-between items-center shadow-lg">
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
    </div>
  );
};

export default MusicScreen;