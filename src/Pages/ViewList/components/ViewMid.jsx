/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import column1 from "../../../Images/list/column-1.png";
import column2 from "../../../Images/list/column-2.png";
import column3 from "../../../Images/list/column-3.png";
import column4 from "../../../Images/list/column-4.png";
import column5 from "../../../Images/list/column-5.png";
import column6 from "../../../Images/list/column-6.png";
import column7 from "../../../Images/list/column-7.png";
import column8 from "../../../Images/list/column-8.png";
import useUrlState from "@ahooksjs/use-url-state";

export default function ViewMid() {
  const [data, setData] = useState(fakeData);
  const [params] = useUrlState({
    filter: "",
  });

  const newData = params?.filter
    ? data.filter((v) => v.type === params.filter)
    : data;

  return (
    <div className="flex-column">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          // width: 1000,
        }}
      >
        {newData.map((item, index) => (
          <div
            key={index.toString()}
            style={{
              position: "relative",
              width: 234,
              margin: "0 2px 0 2px",
              marginBottom: 18,
            }}
          >
            <img src={item.img} style={{ height: 144, width: "100%" }} />
            <div
              style={{
                position: "absolute",
                top: 118,
                left: 0,
                backgroundColor: "#FFCC21",
                padding: "2px 4px 4px 2px",
                color: "#FFF",
                fontSize: 15,
              }}
            >
              2021.05.17 23:25
            </div>
            <div style={{ lineHeight: "22px", fontSize: 15, marginTop: 5 }}>
              魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…
            </div>
            <div
              style={{
                lineHeight: "22px",
                fontSize: 15,
                marginTop: 2,
                color: "#FF963C",
              }}
            >
              #魚料理 #和食 #DHA
            </div>
          </div>
        ))}
      </div>
      <button
        className="btn"
        onClick={() => setData((v) => v.concat(fakeData))}
        style={{ marginTop: 28, marginBottom: 64 }}
      >
        コラムをもっと見る
      </button>
    </div>
  );
}

const fakeData = [
  { img: column1, type: "MORNING", text: "05.21.Morning" },
  { img: column2, type: "LUNCH", text: "05.21.Lunch" },
  { img: column3, type: "DINNER", text: "05.21.Dinner" },
  { img: column4, type: "SNACK", text: "05.21.Snack" },
  { img: column5, type: "MORNING", text: "05.20.Morning" },
  { img: column6, type: "LUNCH", text: "05.20.Lunch" },
  { img: column7, type: "DINNER", text: "05.20.Dinner" },
  { img: column8, type: "SNACK", text: "05.21.Snack" },
  { img: column1, type: "MORNING", text: "05.21.Morning" },
  { img: column2, type: "LUNCH", text: "05.21.Lunch" },
  { img: column3, type: "DINNER", text: "05.21.Dinner" },
  { img: column4, type: "SNACK", text: "05.21.Snack" },
  { img: column5, type: "MORNING", text: "05.20.Morning" },
  { img: column6, type: "LUNCH", text: "05.20.Lunch" },
  { img: column7, type: "DINNER", text: "05.20.Dinner" },
  { img: column8, type: "SNACK", text: "05.21.Snack" },
];
