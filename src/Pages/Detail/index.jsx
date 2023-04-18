import React from "react";
import { LineChart } from "../../components/chart/LineChart";

export default function Detail() {
  return <div style={{ padding: "0 160px 0 160px" }} className="flex-column">
    <div style={{ height: 300, width: "100%", backgroundColor: "#414141", margin: "56px 0 56px 0" }}>
      <LineChart />
    </div>
  </div>;
}
