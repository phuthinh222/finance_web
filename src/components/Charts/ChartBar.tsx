import React from "react";
import { Chart, defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

import sourceData from "../../data/sourceData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

type SourceData = {
  label: string;
  value: number;
};

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
            labels: (sourceData as SourceData[]).map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: (sourceData as SourceData[]).map((data) => data.value),
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
