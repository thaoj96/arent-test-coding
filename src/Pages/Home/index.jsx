import React from "react";
import ViewTop from "./components/ViewTop";
import ViewFilter from "./components/ViewFilter";
import ViewMid from "./components/ViewMid";

export default function Home() {
  return (
    <div>
      <ViewTop />
      <ViewFilter />
      <ViewMid />
    </div>
  );
}
