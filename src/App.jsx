import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SleepScreen from "./screens/SleepScreen";
import ScanningScreen from "./screens/scanningScreen";
import StatisticsScreen from "./screens/statisticsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import BottomTabBar from "../components/bottomTabBar";
import Login from "./screens/login";
import SignUp from "./screens/signup";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected routes */}
        {isLoggedIn ? (
          <>
            <Route path="/*" element={<AppLayout />} />
          </>
        ) : (
          // Redirect any non-public route access to login
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
