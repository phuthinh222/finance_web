import { Chart, ChartConfiguration } from "chart.js";
import { useEffect, useRef } from "react";
import data from "../../data/lineData.json";

type TimeSeries = {
  [time: string]: {
    "1. open": string;
    "2. high": string;
    "3. low": string;
    "4. close": string;
    "5. volume": string;
  };
};

const timeSeries: TimeSeries = data["Time Series (5min)"];

const ChartLine: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const chartData: { x: number; y: number }[] = [];
    let index = 0;

    const timeStamps: string[] = [];

    Object.keys(timeSeries).forEach((time) => {
      const openPrice = parseFloat(timeSeries[time]["1. open"]);
      chartData.push({ x: index, y: openPrice });
      timeStamps.push(time); // Lưu timestamp đầy đủ (ngày + giờ)
      index++;
    });

    const config: ChartConfiguration = {
      type: "line",
      data: {
        datasets: [
          {
            label: "Open Price",
            borderColor: "#ff0000",
            borderWidth: 1,
            radius: 0,
            data: chartData,
          },
        ],
      },
      options: {
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            type: "category", // Dùng "category" để hiển thị ngày
            labels: Object.keys(timeSeries).map((time) => {
              const date = new Date(time); // Chuyển timestamp thành đối tượng Date
              return date.getDate().toString(); // Chỉ lấy ngày
            }),
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: true,
            },
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              title: (tooltipItems) => {
                const index = tooltipItems[0].dataIndex;
                const timestamp = timeStamps[index]; // Lấy timestamp đầy đủ
                const date = new Date(timestamp); // Chuyển thành Date để hiển thị đầy đủ ngày giờ
                return date.toLocaleString(); // Hiển thị đầy đủ ngày giờ
              },
            },
          },
          legend: {
            display: false,
          },
        },
      },
    };

    // Destroy the previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create a new chart instance
    if (canvasRef.current) {
      chartRef.current = new Chart(canvasRef.current, config);
    }

    // Cleanup when the component is unmounted
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default ChartLine;
