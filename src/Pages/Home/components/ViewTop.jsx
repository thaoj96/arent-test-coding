/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import photo from "../../../Images/main_photo.png";
import { LineChart } from "../../../components/chart/LineChart";
import { DoughnutChart } from "../../../components/chart/DoughnutChart";

export default function ViewTop() {
  return (
    <div
      style={{
        height: 310,
        backgroundColor: "#2e2e2e",
        width: "100%",
      }}
      className="flex-row"
    >
      <div style={{ height: "100%", width: 540, position: "relative" }}>
        <img src={photo} style={{ height: "100%", width: "auto" }} />
        <div
          style={{
            position: "absolute",
            top: 65,
            left: 170,
            width: 180,
            height: 180,
          }}
        >
          <DoughnutChart />
        </div>
      </div>
      <div
        style={{
          height: 300,
          width: "90%",
          padding: "0 32px 0 32px",
        }}
      >
        <LineChart />
      </div>
    </div>
  );
}
