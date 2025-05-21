// src/components/SleepStagesChart.jsx
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

const SleepStagesChart = () => {
  const data = {
    labels: ["Awake", "Light Sleep", "Deep Sleep"],
    datasets: [
      {
        data: [9, 58, 33],
        backgroundColor: ["#FAD85D", "#4A90E2", "#C66AC0"],
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  };

  const options = {
    animation: {
      animateRotate: true,
      duration: 1500,
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: 200, height: 200 }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default SleepStagesChart;
