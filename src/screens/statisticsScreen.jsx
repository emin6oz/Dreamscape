import React from 'react';
import './statisticsScreen.scss';

const  StatisticsScreen = () => {
  return (
    <div className="statistics-screen">
      <h1 className="title">Statistics</h1>

      <div className="date-row">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
          <div key={day} className={`date-item ${index === 2 ? 'active' : ''}`}>
            <span className="day">{day}</span>
            <span className="date">{6 + index}</span>
          </div>
        ))}
      </div>

      <h2 className="section-title">Sleep stages</h2>

      <div className="sleep-stages">
        <div className="stage">
          <div className="circle awake" />
          <div className="label">Awake</div>
          <div className="value">9%</div>
          <div className="time">9min</div>
        </div>
        <div className="stage">
          <div className="circle light" />
          <div className="label">Light sleep</div>
          <div className="value">58%</div>
          <div className="time">&gt;5h</div>
        </div>
        <div className="stage">
          <div className="circle deep" />
          <div className="label">Deep sleep</div>
          <div className="value">33%</div>
          <div className="time">3h</div>
        </div>
      </div>

      <div className="sleep-info">
        <div className="info-block">
          <span role="img" aria-label="moon">🌙</span>
          <div className="label">Asleep</div>
          <div className="value">8h</div>
        </div>
        <div className="info-block">
          <span role="img" aria-label="bed">🛏️</span>
          <div className="label">In bed</div>
          <div className="value">8h 30min</div>
        </div>
        <div className="info-block">
          <span role="img" aria-label="sound">📶</span>
          <div className="label">Noise</div>
          <div className="value">40dB</div>
        </div>
      </div>

      <h2 className="section-title">Tips</h2>
      <div className="tips">
        <div className="tip"><span>🦻</span> Use ear plugs in not so quiet places for better rest.</div>
        <div className="tip"><span>🥤</span> Stay hydrated! Drinking water before bed supports temperature regulation.</div>
        <div className="tip"><span>📵</span> Avoid screens 1–2 hours before bed.</div>
        <div className="tip"><span>🎵</span> Listen to peaceful sounds before going to sleep. It’ll help you to reduce stress.</div>
      </div>
    </div>
  );
};

export default StatisticsScreen;
