import React from "react";
import { defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import data from "../../data/lineData.json";

const openValues = Object.values(data["Time Series (5min)"]).map(
  (item) => item["1. open"]
);

const labels = Object.keys(data["Time Series (5min)"]).map((timestamp) => {
  const date = new Date(timestamp);
  return date.getDate(); // Chỉ lấy phần ngày (ví dụ: "19")
});

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.color = "black";

export const ChartBar: React.FC = () => {
  return (
    <div className="w-full h-full">
      <div className="flex justify-between">
        <div>
          <span>Volume 24H</span>
          <h2>$860.60M</h2>
        </div>
        <div>
          <button className="btn py-2 px-4 bg-gray-500 rounded-md mr-2">
            D
          </button>
          <button className="btn py-2 px-4 bg-gray-500 rounded-md mr-2">
            W
          </button>
          <button className="btn py-2 px-4 bg-gray-500 rounded-md">M</button>
        </div>
      </div>
      <div className="w-full h-[300px] mt-[-20px]">
        <Bar
          data={{
            labels: labels, // Sử dụng ngày (chỉ ngày) làm nhãn
            datasets: [
              {
                label: "Open Price",
                data: openValues, // Sử dụng openValues làm dữ liệu cho biểu đồ
                backgroundColor: ["rgba(43, 63, 229, 0.8)"],
                borderRadius: 5,
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                ticks: {
                  // Set rotation to 0 to make labels upright
                  maxRotation: 0,
                  minRotation: 0,
                },
                grid: {
                  display: false,
                },
              },
              y: {
                grid: {
                  display: false,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};
