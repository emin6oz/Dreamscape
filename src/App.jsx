import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Main app screens
import SleepScreen from "./screens/SleepScreen";
import ScanningScreen from "./screens/scanningScreen";
import StatisticsScreen from "./screens/statisticsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import BottomTabBar from "./components/bottomTabBar";
import RecommendationsScreen from "./screens/RecommendationsScreen";

// Auth screens
import Login from "./screens/login";
import SignUp from "./screens/signup";
import ForgotPassword from "./screens/ForgotPassword";
import ResetPassword from "./screens/ResetPassword"; 
import SplashScreen from "./screens/SplashScreen";

// Onboarding flow
import Sleep0 from "./screens/Sleep0";
import Sleep1 from "./screens/Sleep1";
import Sleep2 from "./screens/Sleep2";
import Sleep3 from "./screens/Sleep3";
import Sleep4 from "./screens/Sleep4";
import NotificationPermission from "./screens/NotificationPermission";
import MicPermission from "./screens/MicPermission";

// Utility
import AlarmScreen from "./screens/AlarmScreen";
import MusicScreen from "./screens/musicScreen";

const AppLayout = () => (
  <div className="app-layout">
    <div className="main-content">
      <Routes>
        <Route path="/sleepscreen" element={<SleepScreen />} />
        <Route path="/scan" element={<ScanningScreen />} />
        <Route path="/statistics" element={<StatisticsScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/notification-permission" element={<NotificationPermission />} />
        <Route path="/alarm" element={<AlarmScreen />} />
        <Route path="/music" element={<MusicScreen />} />
        <Route path="/recommendations" element={<RecommendationsScreen />} />
        <Route path="*" element={<Navigate to="/sleepscreen" replace />} />
      </Routes>
    </div>
    <BottomTabBar />
  </div>
);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("loggedIn") === "true";
  });

  useEffect(() => {
    localStorage.setItem("loggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Router>
      <Routes>
        {/* Redirect root to login always */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Public routes */}
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} /> 
        <Route path="/splash" element={<SplashScreen />} />

        {/* Onboarding flow */}
        <Route path="/sleep0" element={<Sleep0 />} />
        <Route path="/sleep1" element={<Sleep1 />} />
        <Route path="/sleep2" element={<Sleep2 />} />
        <Route path="/sleep3" element={<Sleep3 />} />
        <Route path="/sleep4" element={<Sleep4 />} />
        <Route path="/notification-permission" element={<NotificationPermission />} />
        <Route path="/mic-permission" element={<MicPermission />} />

        {/* Protected routes */}
        <Route
          path="/*"
          element={isLoggedIn ? <AppLayout /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
