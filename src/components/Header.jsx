import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-left">
        <img
          src="/logo/header-logo.webp"
          alt="Company Logo"
          className="header-logo"
        />
      </div>

      <div className="header-right">
        {/* Nepali Patro Widget */}
        <div
          id="np_widget_wiz1"
          widget="day-sm"
          className="nepali-patro-widget"
        ></div>
        <script
          async
          src="https://nepalipatro.com.np/np-widgets/nepalipatro.js"
          id="wiz1"
        ></script>
      </div>
    </header>
  );
}
