import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Onboarding flow
import SplashScreen from './screens/SplashScreen';
import Sleep0 from './screens/Sleep0';
import Sleep1 from './screens/Sleep1';
import Sleep2 from './screens/Sleep2';
import Sleep3 from './screens/Sleep3';
import Sleep4 from './screens/Sleep4';
import MicPermission from './screens/MicPermission';
import NotificationPermission from './screens/NotificationPermission';

// Main app screens
import SleepScreen from './screens/SleepScreen';
import ScanningScreen from './screens/ScanningScreen';
import StatisticsScreen from './screens/StatisticsScreen';
import ProfileScreen from './screens/ProfileScreen';
import BottomTabBar from '../components/BottomTabBar';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Onboarding flow */}
        <Route path="/" element={<SplashScreen />} />
        <Route path="/sleep0" element={<Sleep0 />} />
        <Route path="/sleep-1" element={<Sleep1 />} />
        <Route path="/sleep-2" element={<Sleep2 />} />
        <Route path="/sleep-3" element={<Sleep3 />} />
        <Route path="/sleep-4" element={<Sleep4 />} />
        <Route path="/mic-permission" element={<MicPermission />} />
        <Route path="/notification-permission" element={<NotificationPermission />} />

        {/* Main screens with bottom tab bar */}
        <Route path="/home" element={<><SleepScreen /><BottomTabBar /></>} />
        <Route path="/scan" element={<><ScanningScreen /><BottomTabBar /></>} />
        <Route path="/statistics" element={<><StatisticsScreen /><BottomTabBar /></>} />
        <Route path="/profile" element={<><ProfileScreen /><BottomTabBar /></>} />
      </Routes>
    </Router>
  );
}
