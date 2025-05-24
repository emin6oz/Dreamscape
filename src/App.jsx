import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Auth + Onboarding
import Login from "./screens/login";
import SignUp from "./screens/signup";
import SplashScreen from "./screens/SplashScreen";
import Sleep0 from "./screens/Sleep0";
import Sleep1 from "./screens/Sleep1";
import Sleep2 from "./screens/Sleep2";
import Sleep3 from "./screens/Sleep3";
import Sleep4 from "./screens/Sleep4";
import MicPermission from "./screens/MicPermission";
import NotificationPermission from "./screens/NotificationPermission";

// Main app screens
import SleepScreen from "./screens/SleepScreen";
import ScanningScreen from "./screens/scanningScreen";
import StatisticsScreen from "./screens/statisticsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import BottomTabBar from "../components/bottomTabBar";

// Layout for protected app
const AppLayout = () => (
  <div className="app-layout">
    <div className="main-content">
      <Routes>
        <Route path="/home" element={<SleepScreen />} />
        <Route path="/scan" element={<ScanningScreen />} />
        <Route path="/statistics" element={<StatisticsScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
    </div>
    <BottomTabBar />
  </div>
);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cameFromSignup, setCameFromSignup] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    setCameFromSignup(false);
  };

  const handleSignup = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    setCameFromSignup(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp onSignUp={handleSignup} />} />

        <Route
          path="/splash"
          element={
            <SplashScreen
              cameFromSignup={cameFromSignup}
              onContinue={() =>
                window.location.href = cameFromSignup ? "/sleep0" : "/home"
              }
            />
          }
        />

        <Route path="/sleep0" element={<Sleep0 />} />
        <Route path="/sleep-1" element={<Sleep1 />} />
        <Route path="/sleep-2" element={<Sleep2 />} />
        <Route path="/sleep-3" element={<Sleep3 />} />
        <Route path="/sleep-4" element={<Sleep4 />} />
        <Route path="/mic-permission" element={<MicPermission />} />
        <Route path="/notification-permission" element={<NotificationPermission />} />

        {isLoggedIn ? (
          <Route path="/*" element={<AppLayout />} />
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
