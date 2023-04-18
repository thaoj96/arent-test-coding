/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import useUrlState from "@ahooksjs/use-url-state";

export default function ViewMyDiary() {
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
        }}
      >
        {newData.map((item, index) => (
          <div
            key={index.toString()}
            style={{
              width: 231,
              height: 231,
              margin: "0 6px 12px 6px",
              border: "2px solid #707070",
              padding: 16,
              overflow: "hidden",
              textOverflow: "ellipsis",
              color: "#414141",
            }}
          >
            <div style={{ fontSize: 18 }}>2021.05.21</div>
            <div style={{ fontSize: 18 }}>23:25</div>

            <div style={{ marginTop: 8 }}>
              私の日記の記録が一部表示されます。
            </div>
            <div style={{ lineHeight: "17px" }}>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
            </div>
          </div>
        ))}
      </div>
      <button
        className="btn"
        onClick={() => setData((v) => v.concat(fakeData))}
        style={{ marginTop: 28, marginBottom: 64 }}
      >
        記録をもっと見る
      </button>
    </div>
  );
}

const fakeData = [
  { type: "MORNING", text: "05.21.Morning" },
  { type: "LUNCH", text: "05.21.Lunch" },
  { type: "DINNER", text: "05.21.Dinner" },
  { type: "SNACK", text: "05.21.Snack" },
  { type: "MORNING", text: "05.20.Morning" },
  { type: "LUNCH", text: "05.20.Lunch" },
  { type: "DINNER", text: "05.20.Dinner" },
  { type: "SNACK", text: "05.21.Snack" },
  { type: "MORNING", text: "05.21.Morning" },
  { type: "LUNCH", text: "05.21.Lunch" },
  { type: "DINNER", text: "05.21.Dinner" },
  { type: "SNACK", text: "05.21.Snack" },
  { type: "MORNING", text: "05.20.Morning" },
  { type: "LUNCH", text: "05.20.Lunch" },
  { type: "DINNER", text: "05.20.Dinner" },
  { type: "SNACK", text: "05.21.Snack" },
];
