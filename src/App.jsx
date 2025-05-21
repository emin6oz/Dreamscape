import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Pages
import TogglePage from './pages/TogglePage';
import RatingPage from './pages/RatingPage';
import SleepPage from './pages/SleepPage';
import VariantPage from './pages/VariantPage';
import AlarmScreen from './pages/AlarmScreen'; 
import SleepTrackerPage from './pages/SleepTrackerPage'; 
import ProfilePage from './pages/ProfilePage'; 
import MusicPage from './pages/MusicPage';




const App = () => {
  return (
    <div className="text-white min-h-screen bg-zinc-900">
      <nav className="p-4 flex gap-4 bg-zinc-800 justify-center">
        <Link to="/" className="hover:underline">Toggle</Link>
        <Link to="/rating" className="hover:underline">Rating</Link>
        <Link to="/sleep" className="hover:underline">Sleep</Link>
        <Link to="/variants" className="hover:underline">Variant Buttons</Link>
        <Link to="/alarm" className="hover:underline">Alarm</Link> 
        <Link to="/sleep-tracker" className="hover:underline">Sleep Tracker</Link> 
        <Link to="/profile" className="hover:underline">Profile</Link> 
        <Link to="/music" className="hover:underline">Music</Link>


      </nav>

      <Routes>
        <Route path="/" element={<TogglePage />} />
        <Route path="/rating" element={<RatingPage />} />
        <Route path="/sleep" element={<SleepPage />} />
        <Route path="/variants" element={<VariantPage />} />
        <Route path="/alarm" element={<AlarmScreen />} /> 
        <Route path="/sleep-tracker" element={<SleepTrackerPage />} /> 
        <Route path="/profile" element={<ProfilePage />} /> 
        <Route path="/music" element={<MusicPage />} />


      </Routes>
      </div>
  );
};

export default App;

