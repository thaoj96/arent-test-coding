import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
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
            display: false
        },
        title: {
            display: false,
        }
    },
    scales: {
        x: {
            grid: {
                color: "#777777"
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

const labels = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5].map(o => o + "月");

export const data = {
    labels,
    datasets: [
        {
            // label: "Dataset 1",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
            borderColor: "#FFCC21",
            backgroundColor: "#FFCC21"
        },
        {
            // label: "Dataset 2",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
            borderColor: "#8FE9D0",
            backgroundColor: "#8FE9D0"
        }
    ]
};

export function LineChart() {
    console.log("data", data);
    return <Line options={options} data={data} />;
}