/* eslint-disable no-unused-vars */
import React from "react";
import { IconBgFilter, IconCoffee, IconFilter1 } from "../../../Icons/orther";
import useUrlState from "@ahooksjs/use-url-state";

export default function ViewFilter() {
  const [params, setParams] = useUrlState({
    filter: "",
  });

  const onClickFilter = (key) => setParams({ filter: params?.filter === key ? "" : key })

  return (
    <div
      className="flex-row"
      style={{ justifyContent: "center", margin: "25px 0 25px 0" }}
    >
      {[
        {
          icon: <IconFilter1 />,
          text: "Morning",
          onClick: () => onClickFilter("MORNING")
        },
        {
          icon: <IconFilter1 />,
          text: "Lunch",
          onClick: () => onClickFilter("LUNCH")
        },
        {
          icon: <IconFilter1 />,
          text: "Dinner",
          onClick: () => onClickFilter("DINNER")
        },
        {
          icon: <IconCoffee />,
          text: "Snack",
          onClick: () => onClickFilter("SNACK")
        },
      ].map((item, index) => (
        <div
          onClick={item.onClick}
          style={{
            position: "relative",
            margin: "0 42px 0 42px",
            color: "#FFF",
            cursor: "pointer",
          }}
          key={index.toString()}
        >
          <div
            style={{
              position: "absolute",
              width: 116,
              height: 134,
              justifyContent: "center",
            }}
            className="flex-column"
          >
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </div>

          <IconBgFilter />
        </div>
      ))}
    </div>
  );
}
