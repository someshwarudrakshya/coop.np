import React, { useEffect } from "react";
import "./css/EmiCalculator.css";

export default function EMI() {
  useEffect(() => {
    // Load external EMI calculator script
    const script = document.createElement("script");
    script.src =
      "https://emicalculator.net/widget/2.0/js/emicalc-loader.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // cleanup on unmount
    };
  }, []);

  return (
      <section className="container">
        <div className="section-title">
          <h2>
            EMI <span className="highlight">Calculator</span>
          </h2>
          <p>Calculate your Equated Monthly Installment (EMI) easily.</p>
        </div>

        {/* EMI Calculator Widget */}
        <div className="emi-widget">
          <div
            id="ecww-widgetwrapper"
            style={{ minWidth: "250px", width: "100%" }}
          >
            <div
              id="ecww-widget"
              style={{
                position: "relative",
                paddingTop: 0,
                paddingBottom: "280px",
                height: 0,
                overflow: "hidden",
              }}
            ></div>
            <div id="ecww-more"></div>
          </div>
        </div>
      </section>

  );
}
