
import React from 'react';
import BottomTabBar from '../components/bottomTabBar';
import './App.css';
import StatisticsScreen from './screens/statisticsScreen';
<Route path="/statistics" element={<StatisticsScreen/>} />

function App() {
  return (
    <div className="app-container">
      <div style={{ padding: '20px' }}>
        <h1>Welcome to the App</h1>
        <p>This is the main content area. Scroll or add content here.</p>
      </div>

      <BottomTabBar />
    </div>
  );
}

export default App;

