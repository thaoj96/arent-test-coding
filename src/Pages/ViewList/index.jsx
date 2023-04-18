import React from "react";
import ViewTop from "./components/ViewTop";
import ViewMid from "./components/ViewMid";

export default function ViewList() {
  return (
    <div style={{ padding: "0 160px 0 160px" }} className="flex-column">
      <ViewTop />
      <div style={{ marginTop: 56 }}>
        <ViewMid />
      </div>
    </div>
  );
}
