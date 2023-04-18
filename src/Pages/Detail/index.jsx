import React from "react";
import ViewTop from "./components/ViewTop";
import ViewMyExercise from "./components/ViewMyExercise";
import ViewMyDiary from "./components/ViewMyDiary";
import { LineChart2 } from "../../components/chart/LineChart2";

export default function Detail() {
  return (
    <div style={{ padding: "0 160px 0 160px" }} className="flex-column">
      <ViewTop />
      <div
        style={{
          height: 350,
          width: "100%",
          backgroundColor: "#414141",
          margin: "56px 0 56px 0",
        }}
      >
        <LineChart2 title="BODY RECORD" />
      </div>

      <ViewMyExercise />

      <div
        style={{
          margin: "56px 0 0 0",
        }}
      >
        <div style={{ fontSize: 22, marginBottom: 10, fontWeight: 400 }}>
          MY DIARY
        </div>
        <ViewMyDiary />
      </div>
    </div>
  );
}
