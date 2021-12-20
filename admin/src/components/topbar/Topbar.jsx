import React from "react";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Malbec Admin</span>
        </div>
        <div className="topRight">
          <img
            src="https://raw.githubusercontent.com/SebastBorbon/Portfolio/main/public/profileellie.png"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
