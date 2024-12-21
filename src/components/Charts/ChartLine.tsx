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
      timeStamps.push(time);
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
            type: "linear",
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
                return timeStamps[index]; // Display the timestamp corresponding to the data point
              },
              label: (tooltipItem) => {
                const item = tooltipItem as Chart.TooltipItem; // Cast to Chart.TooltipItem
                const openPrice = item.raw.y;
                return `Open Price: ${openPrice}`; // Display the open price
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
