import React from "react";
import "./css/ScrollingText.css";

export default function ScrollingText() {
  return (
    <div className="scroll-container news-ticker">
      <span className="ticker-label">स्वागत:</span>
      <div className="ticker-wrapper">
        <div className="ticker-content">
          प्रिय सदस्य ज्युहरू, हाम्रो सहकारी संस्थाको वेबसाइटमाथि तपाईंलाई स्वागत
          छ। संस्थाले तपाईंको आर्थिक, सामाजिक र सांस्कृतिक विकासमा महत्वपूर्ण
          योगदान दिनेछ । हामी सबैको सहकार्य, एकता र मेहनतले मात्र संस्थालाई अगाडि
          बढाउन सकिन्छ भन्नेमा विश्वास गर्दछौ । तपाईंको सहयोग, विश्वास र सक्रिय
          सहभागिताको हामी अपेक्षा गर्दछौं । धन्यवाद ।
        </div>
      </div>
    </div>
  );
}
