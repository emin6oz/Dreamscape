import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

const chartData = [
  { label: "Awake", value: 9, time: "9min", color: "#FAD85D" },
  { label: "Light sleep", value: 58, time: ">5h", color: "#4A90E2" },
  { label: "Deep sleep", value: 33, time: "3h", color: "#C66AC0" },
];

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  animation: {
    animateRotate: true,
    duration: 1200,
  },
};

const SleepStagesChart = () => {
  return (
    <div className="sleep-stages-chart">
      {chartData.map((stage, i) => {
        const data = {
          labels: [stage.label],
          datasets: [
            {
              data: [stage.value, 100 - stage.value],
              backgroundColor: [stage.color, "#1d223d"],
              borderWidth: 0,
            },
          ],
        };

        return (
          <div key={i} className="chart-block">
            <div className="label">{stage.label}</div>
            <div className="chart-wrapper">
              <Pie data={data} options={options} />
            </div>
            <div className="label">Awake</div>
            <div className="label">light sleep</div>
            <div className="label">Deep</div>
            <div className="metrics">
              <div className="percent">{stage.value}%</div>
              <div className="time">{stage.time}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SleepStagesChart;
