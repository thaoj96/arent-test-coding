/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import useUrlState from "@ahooksjs/use-url-state";

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
          img: MyReCom1,
          text: "BODY RECORD",
          content: "自分のカラダの記録",
        },
        {
          img: MyReCom2,
          text: "MY EXERCISE",
          content: "自分の運動の記録",
        },
        {
          img: MyReCom3,
          text: "MY DIARY",
          content: "自分の日記",
        },
      ].map((item, index) => (
        <div
          style={{
            position: "relative",
            margin: "0 24px 0 24px",
            color: "#FFF",
            cursor: "pointer",
            width: 288,
            height: 288,
            backgroundColor: "#FFCC21",
            padding: 24,
            overflow: "hidden",
          }}
          key={index.toString()}
        >
          <div
            style={{
              position: "absolute",
              justifyContent: "center",
              width: 288,
              height: 288,
            }}
            className="flex-column"
          >
            <div style={{ color: "#FFCC21", fontSize: 25 }}>{item.text}</div>
            <div
              style={{
                backgroundColor: "#FF963C",
                width: 200,
                textAlign: "center",
                marginTop: 5,
              }}
            >
              {item.content}
            </div>
          </div>

          <img
            src={item.img}
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#414141",
            }}
          />
        </div>
      ))}
    </div>
  );
}
