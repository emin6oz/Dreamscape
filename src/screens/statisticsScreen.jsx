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
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none">
        <path d="M9.5 0.125C9.75514 0.125034 10.0014 0.218704 10.1921 0.388245C10.3827 0.557786 10.5045 0.791405 10.5344 1.04479L10.5417 1.16667V17.8333C10.5414 18.0988 10.4397 18.3542 10.2574 18.5473C10.0752 18.7403 9.82609 18.8565 9.56105 18.8721C9.296 18.8876 9.03502 18.8014 8.83142 18.631C8.62783 18.4606 8.49698 18.2189 8.46562 17.9552L8.45833 17.8333V1.16667C8.45833 0.8904 8.56808 0.625447 8.76343 0.430097C8.95878 0.234747 9.22373 0.125 9.5 0.125ZM5.33333 3.25C5.6096 3.25 5.87455 3.35975 6.0699 3.5551C6.26525 3.75045 6.375 4.0154 6.375 4.29167V14.7083C6.375 14.9846 6.26525 15.2496 6.0699 15.4449C5.87455 15.6403 5.6096 15.75 5.33333 15.75C5.05707 15.75 4.79211 15.6403 4.59676 15.4449C4.40141 15.2496 4.29167 14.9846 4.29167 14.7083V4.29167C4.29167 4.0154 4.40141 3.75045 4.59676 3.5551C4.79211 3.35975 5.05707 3.25 5.33333 3.25ZM13.6667 3.25C13.9429 3.25 14.2079 3.35975 14.4032 3.5551C14.5986 3.75045 14.7083 4.0154 14.7083 4.29167V14.7083C14.7083 14.9846 14.5986 15.2496 14.4032 15.4449C14.2079 15.6403 13.9429 15.75 13.6667 15.75C13.3904 15.75 13.1254 15.6403 12.9301 15.4449C12.7347 15.2496 12.625 14.9846 12.625 14.7083V4.29167C12.625 4.0154 12.7347 3.75045 12.9301 3.5551C13.1254 3.35975 13.3904 3.25 13.6667 3.25ZM1.16667 6.375C1.44293 6.375 1.70789 6.48475 1.90324 6.6801C2.09859 6.87545 2.20833 7.1404 2.20833 7.41667V11.5833C2.20833 11.8596 2.09859 12.1246 1.90324 12.3199C1.70789 12.5153 1.44293 12.625 1.16667 12.625C0.890399 12.625 0.625447 12.5153 0.430097 12.3199C0.234747 12.1246 0.125 11.8596 0.125 11.5833V7.41667C0.125 7.1404 0.234747 6.87545 0.430097 6.6801C0.625447 6.48475 0.890399 6.375 1.16667 6.375ZM17.8333 6.375C18.0885 6.37503 18.3347 6.4687 18.5254 6.63825C18.716 6.80779 18.8379 7.04141 18.8677 7.29479L18.875 7.41667V11.5833C18.8747 11.8488 18.773 12.1042 18.5908 12.2973C18.4085 12.4903 18.1594 12.6065 17.8944 12.6221C17.6293 12.6376 17.3684 12.5514 17.1648 12.381C16.9612 12.2106 16.8303 11.9689 16.799 11.7052L16.7917 11.5833V7.41667C16.7917 7.1404 16.9014 6.87545 17.0968 6.6801C17.2921 6.48475 17.5571 6.375 17.8333 6.375Z" fill="#F4F4F4"/>
        </svg>
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
