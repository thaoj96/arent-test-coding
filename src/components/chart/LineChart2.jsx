import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  // responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      //   position: "top" as const
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        color: "#777777",
      },
    },
    y: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
  },
};

const labels = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5].map((o) => o + "月");

export const data = {
  labels,
  datasets: [
    {
      // label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "#FFCC21",
      backgroundColor: "#FFCC21",
    },
    {
      // label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "#8FE9D0",
      backgroundColor: "#8FE9D0",
    },
  ],
};

export function LineChart2({ title }) {
  // console.log("data", data);
  return (
    <div>
      {title && (
        <div
          className="flex-row"
          style={{ margin: "16px 0 0 24px", color: "#FFF" }}
        >
          <div style={{ fontSize: 15 }}>
            <div>BODY</div>
            <div>RECORD</div>
          </div>
          <div style={{ marginLeft: 24, fontSize: 22, fontWeight: 400 }}>
            2021.05.21
          </div>
        </div>
      )}
      <div style={{ height: 235, padding: "0 50px 0 50px" }}>
        <Line options={options} data={data} />;
      </div>
      <div className="flex-row" style={{ marginTop: 12 }}>
        {["日", "週", "月", "年"].map((item, index) => (
          <div
            style={{
              width: 56,
              height: 24,
              borderRadius: 11,
              backgroundColor: index === 3 ? "#FFCC21" : "#FFF",
              marginLeft: 16,
              textAlign: "center",
              color: index === 3 ? "#FFF" : "#FFCC21",
              cursor: "pointer",
            }}
            key={index.toString()}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
