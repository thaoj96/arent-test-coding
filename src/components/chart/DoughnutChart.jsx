import React from "react";
import { PieChart } from "react-minimal-pie-chart";

export function DoughnutChart() {
  return (
    <div>
      <PieChart
        data={[
          {
            color: "#E4E9FF00",
            title: "Info 1",
            value: 25,
          },
          {
            color: "#FFFFFF",
            title: "Info 2",
            value: 75,
          },
        ]}
        lineWidth={8}
        rounded
        animate
        startAngle={-180}
        totalValue={100}
        lengthAngle={360}
      />
      <div style={{ position: "absolute", top: 65, left: 45, color: "#FFF" }}>
        05/21 <span style={{ fontSize: 25, fontWeight: 400 }}>75%</span>
      </div>
    </div>
  );
}
