import React, { useEffect } from "react";
import "./css/NepalWidgets.css";

export default function NepalWidgets() {
  useEffect(() => {
    // Inject Date Converter Script dynamically
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://www.ashesh.com.np/nepali-date/dcnew.js";
    script.id = "nc_script";
    document.body.appendChild(script);

    return () => {
      // Cleanup on component unmount
      const oldScript = document.getElementById("nc_script");
      if (oldScript) oldScript.remove();
    };
  }, []);

  return (
    <div className="container widgets-container">
      <div className="section-title">
        <h2>
          Nepal <span className="highlight">Widgets</span>
        </h2>
        <p>Stay updated with Calendar, Gold/Silver, Forex and Date Converter.</p>
      </div>

      <div className="widgets-grid">
        {/* Left Column - Calendar */}
        <div className="calendar-section">
          <div className="calendar-wrapper">
            <iframe
              src="https://www.hamropatro.com/widgets/calender-full.php"
              frameBorder="0"
              scrolling="no"
              marginWidth="0"
              marginHeight="0"
              allowTransparency="true"
              className="calendar-iframe"
              title="Nepali Calendar"
            ></iframe>
          </div>
        </div>

        {/* Right Column - Gold, Forex, Date Converter */}
        <div className="side-widgets">
          {/* Gold Widget */}
          <div className="widget">
            <iframe
              src="https://www.ashesh.com.np/gold/widget.php?api=602284p195&header_color=0077e5"
              frameBorder="0"
              scrolling="no"
              marginWidth="0"
              marginHeight="0"
              className="widget-iframe"
              title="Gold & Silver Rates Nepal"
            ></iframe>
            <span className="widget-credit">
              ©{" "}
              <a
                href="https://www.ashesh.com.np/gold/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gold & Silver Rates Nepal
              </a>
            </span>
          </div>

          {/* Forex Widget */}
          <div className="widget">
            <iframe
              src="https://www.ashesh.com.np/forex/widget2.php?api=602285p155&header_color=38b45e&background_color=faf8ee&header_title=Nepal%20Exchange%20Rates"
              frameBorder="0"
              scrolling="no"
              marginWidth="0"
              marginHeight="0"
              className="widget-iframe"
              title="Forex Exchange Rates"
            ></iframe>
            <span className="widget-credit">
              ©{" "}
              <a
                href="https://www.ashesh.com.np/forex/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Foreign Exchange Rates
              </a>
            </span>
          </div>

          {/* Date Converter */}
          <div className="widget">
            <div
              id="ncwidget"
              style={{ textAlign: "center" }}
              dangerouslySetInnerHTML={{
                __html: `
                  <div id="ncwidgetlink">
                    Powered by © 
                    <a href="https://www.ashesh.com.np/nepali-date-converter.php" 
                       id="nclink" 
                       title="Nepali date converter" 
                       target="_blank">
                      Nepali Date Converter
                    </a>
                  </div>
                `,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
