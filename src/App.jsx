import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SleepScreen from './screens/SleepScreen';
import ScanningScreen from './screens/scanningScreen';
import StatisticsScreen from './screens/StatisticsScreen';
import ProfileScreen from './screens/ProfileScreen';
import BottomTabBar from '../components/bottomTabBar';

const AppLayout = () => (
  <div className="app-layout">
    <div className="main-content">
      <Routes>
        <Route path="/" element={<SleepScreen />} />
        <Route path="/scan" element={<ScanningScreen />} />
        <Route path="/statistics" element={<StatisticsScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
    </div>
    <BottomTabBar />
  </div>
);

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
