import React from "react";
import { Outlet } from "react-router-dom";
import "./style.css";
import Header from "./Header";
import Footer from "./Footer";
import { gui } from "../utils/gui";
import { IconScrollToTop } from "../Icons/orther";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <div onClick={() => {
        const element = document.getElementById("main-content");
        element.scrollTop = 0;
      }} style={{ position: "absolute", bottom: 150, right: 80, cursor: "pointer" }}><IconScrollToTop /></div>

      <Header />
      <div
        className="scroll-content"
        id="main-content"
        style={{
          height: gui.screenHeight - 193,
          backgroundColor: "#FFF",
          overflow: "auto",
          color: "#333",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default MainLayout;
