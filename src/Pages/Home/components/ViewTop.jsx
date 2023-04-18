/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { gui } from "../../../utils/gui";
import photo from "../../../Images/main_photo.png"
import { LineChart } from "../../../components/chart/LineChart";

export default function ViewTop() {
  return (
    <div
      style={{
        // height: 310,
        height: gui.screenWidth / 3.9,
        backgroundColor: "#2E2E2E",
        width: "100%",
      }}
      className="flex-row"
    >
      <img src={photo} style={{ height: "100%", width: "auto" }} />
      <div style={{ width: "100%", height: "95%", paddingLeft: 32, paddingRight: 32 }}>
        <LineChart />
      </div>
    </div>
  );
}
