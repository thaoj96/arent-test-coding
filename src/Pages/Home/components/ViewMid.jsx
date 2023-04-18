/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import m01 from "../../../Images/m01.png";
import d01 from "../../../Images/d01.png";
import d02 from "../../../Images/d02.png";
import l01 from "../../../Images/l01.png";
import l02 from "../../../Images/l02.png";
import l03 from "../../../Images/l03.png";
import s01 from "../../../Images/s01.png";
import useUrlState from "@ahooksjs/use-url-state";

export default function ViewMid() {
  const [data, setData] = useState(fakeData);
  const [params] = useUrlState({
    filter: "",
  });

  const newData = params?.filter ? data.filter(v => v.type === params.filter) : data

  return (
    <div className="flex-column"
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          paddingLeft: 160,
          paddingRight: 160,
          justifyContent: "center"
          // width: 1000,
        }}
      >
        {newData.map((item, index) => (
          <div
            key={index.toString()}
            style={{
              position: "relative",
              width: 234,
              height: 234,
              margin: "0 4px 0 4px",
              backgroundColor: "gray",
              marginBottom: 8,
            }}
          >
            <img src={item.img} />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                backgroundColor: "#FFCC21",
                padding: "5px 7px 5px 7px",
                color: "#FFF",
              }}
            >
              {item.text}
            </div>
          </div>
        ))}
      </div>
      <button className="btn" onClick={() => setData(v => v.concat(fakeData))} style={{ marginTop: 28, marginBottom: 64 }}>記録をもっと見る</button>
    </div>
  );
}

const fakeData = [
  { img: m01, type: "MORNING", text: "05.21.Morning" },
  { img: d01, type: "LUNCH", text: "05.21.Lunch" },
  { img: d02, type: "DINNER", text: "05.21.Dinner" },
  { img: l01, type: "SNACK", text: "05.21.Snack" },
  { img: l02, type: "MORNING", text: "05.20.Morning" },
  { img: l03, type: "LUNCH", text: "05.20.Lunch" },
  { img: s01, type: "DINNER", text: "05.20.Dinner" },
  { img: m01, type: "SNACK", text: "05.21.Snack" },
  { img: m01, type: "MORNING", text: "05.21.Morning" },
  { img: d01, type: "LUNCH", text: "05.21.Lunch" },
  { img: d02, type: "DINNER", text: "05.21.Dinner" },
  { img: l01, type: "SNACK", text: "05.21.Snack" },
  { img: l02, type: "MORNING", text: "05.20.Morning" },
  { img: l03, type: "LUNCH", text: "05.20.Lunch" },
  { img: s01, type: "DINNER", text: "05.20.Dinner" },
  { img: m01, type: "SNACK", text: "05.21.Snack" },
]