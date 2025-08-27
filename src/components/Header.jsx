import React, { useEffect } from "react";
import logo from "../assets/header.webp";
import "./css/Header.css";

export default function Header() {
  useEffect(() => {
    // Only load once
    if (!document.getElementById("wiz1")) {
      const script = document.createElement("script");
      script.src = "https://nepalipatro.com.np/np-widgets/nepalipatro.js";
      script.async = true;
      script.id = "wiz1";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <img src={logo} alt="Company Logo" className="header-logo" />
        </div>

        <div className="header-right">
          <div
            id="np_widget_wiz1"
            widget="day-sm"
            className="nepali-patro-widget"
          ></div>
        </div>
      </div>
    </header>
  );
}
