import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const SkillsChart = ({ isVisible }) => {
  const chartData = {
    labels: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Python",
      "AWS",
      "GCP",
      "SQL",
    ],
    datasets: [
      {
        label: "Proficiency Level",
        data: [80, 80, 85, 85, 80, 90, 80, 85, 70],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: true,
    aspectRatio: 2.8,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  if (!isVisible) return null;
  return <Bar data={chartData} options={chartOptions} />;
};

export default SkillsChart;
