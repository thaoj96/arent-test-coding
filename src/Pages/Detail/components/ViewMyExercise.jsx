/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export default function ViewMyExercise() {
  return (
    <div
      style={{
        height: 304,
        backgroundColor: "#414141",
        width: "100%",
        color: "#FFF",
      }}
    >
      <div className="flex-row" style={{ margin: "16px 0 0 24px" }}>
        <div style={{ fontSize: 15 }}>
          <div>MY</div>
          <div>EXERCISE</div>
        </div>
        <div style={{ marginLeft: 24, fontSize: 22, fontWeight: 400 }}>
          2021.05.21
        </div>
      </div>
      <div className="flex-row" style={{ margin: "4px 24px 24px 24px" }}>
        <div
          style={{
            height: "100%",
            width: "100%",
            marginRight: 40,
          }}
        >
          <ViewItem />
        </div>
        <div style={{ height: "100%", width: "100%" }}>
          <ViewItem />
        </div>
      </div>
    </div>
  );
}

const ViewItem = () => {
  return (
    <div style={{ height: 220, overflow: "auto", paddingRight: 16 }}>
      {dataFake.map((item, index) => (
        <div
          style={{
            marginBottom: 8,
          }}
          key={index.toString()}
        >
          <div style={{ justifyContent: "space-between" }} className="flex-row">
            <div>
              <div className="flex-row">
                <div
                  style={{
                    width: 4,
                    height: 4,
                    backgroundColor: "#FFF",
                    borderRadius: 2,
                  }}
                />
                <div style={{ marginLeft: 10, fontSize: 15 }}>
                  {item.content}
                </div>
              </div>
              <div style={{ fontSize: 15, color: "#FFCC21", marginLeft: 14 }}>
                {item.kcal}
              </div>
            </div>
            <div style={{ fontSize: 18, color: "#FFCC21" }}>{item.time}</div>
          </div>
          <div
            style={{ border: "1px solid #777777", width: "100%", marginTop: 2 }}
          />
        </div>
      ))}
    </div>
  );
};

const dataFake = [
  {
    content: "家事全般（立位・軽い）",
    kcal: "26kcal",
    time: "10 min",
  },
  {
    content: "家事全般（立位・軽い）",
    kcal: "26kcal",
    time: "10 min",
  },
  {
    content: "家事全般（立位・軽い）",
    kcal: "26kcal",
    time: "10 min",
  },
  {
    content: "家事全般（立位・軽い）",
    kcal: "26kcal",
    time: "10 min",
  },
  {
    content: "家事全般（立位・軽い）",
    kcal: "26kcal",
    time: "10 min",
  },
  {
    content: "家事全般（立位・軽い）",
    kcal: "26kcal",
    time: "10 min",
  },
  {
    content: "家事全般（立位・軽い）",
    kcal: "26kcal",
    time: "10 min",
  },
  {
    content: "家事全般（立位・軽い）",
    kcal: "26kcal",
    time: "10 min",
  },
];
