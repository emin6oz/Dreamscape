import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa6";
import "../screens/musicScreen.scss";

const musicList = [
  {
    title: "Dreamy",
    image:
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&h=640",
  },
  {
    title: "Star Dreams",
    image:
      "https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&h=640",
  },
  {
    title: "Rainfall",
    image:
      "https://images.pexels.com/photos/110874/pexels-photo-110874.jpeg?auto=compress&cs=tinysrgb&h=640",
  },
  {
    title: "Cosmic Calm",
    image:
      "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&h=640",
  },
  {
    title: "Night Breeze",
    image:
      "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&h=640",
  },
  {
    title: "Relaxation",
    image:
      "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&h=640",
  },
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
    <div className="music-screen">
      <div className="content">
        <h2 className="main-title">
          Listen to personalized playlists
          <br />
          to improve your sleep quality.
        </h2>

        <div className="picked-section">
          <h2>Picked for you</h2>
          <div className="picked-card">
            <img
              src="https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&h=640"
              alt="Chill Beats"
            />
            <div className="info">
              <p>Chill Beats</p>
              <p>
                relaxing lo-fi ambient music to help you sleep peacefully
              </p>
            </div>
            <button onClick={handleTogglePlay} className="play-btn">
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
          </div>
          <audio
            ref={audioRef}
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
          />
        </div>

        <div className="browse-section">
          <h3>Browse all</h3>
          <div className="grid">
            {musicList.map((item, i) => (
              <div key={i} className="tile">
                <img src={item.image} alt={item.title} />
                <div className="title">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="player-bar">
        <div className="left">
          <div className="icon">🎵</div>
          <div className="track">
            <div className="title">Sailor song</div>
            <div className="artist">Gigi Perez</div>
          </div>
        </div>
        <button className="play-btn">
          <FaPlay />
        </button>
      </div>
    </div>
  );
};

export default MusicScreen;
