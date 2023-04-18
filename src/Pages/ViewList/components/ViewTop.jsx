/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";

import MyReCom1 from "../../../Images/MyRecommend-1.png";
import MyReCom2 from "../../../Images/MyRecommend-2.png";
import MyReCom3 from "../../../Images/MyRecommend-3.png";

export default function ViewTop() {
  return (
    <div
      className="flex-row"
      style={{ justifyContent: "center", margin: "56px 0 0 0" }}
    >
      {[
        {
          text: "RECOMMENDED COLUMN",
          content: "オススメ",
        },
        {
          text: "RECOMMENDED DIET",
          content: "ダイエット",
        },
        {
          text: "RECOMMENDED BEAUTY",
          content: "美容",
        },
        {
          text: "RECOMMENDED HEALTH",
          content: "健康",
        },
      ].map((item, index) => (
        <div
          style={{
            margin: "0 16px 0 16px",
            color: "#FFF",
            cursor: "pointer",
            width: 216,
            height: 144,
            backgroundColor: "#2E2E2E",
            overflow: "hidden",
            justifyContent: "center",
          }}
          key={index.toString()}
          className="flex-column"
        >
          <div
            style={{
              color: "#FFCC21",
              fontSize: 22,
              textAlign: "center",
              paddingLeft: 16,
              paddingRight: 16,
            }}
          >
            {item.text}
          </div>
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.0001)",
              border: "1px solid #ADADAD",
              width: 56,
              marginTop: 10,
            }}
          />
          <div
            style={{
              marginTop: 8,
              fontSize: 18,
            }}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
