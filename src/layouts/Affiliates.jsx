// src/components/Affiliates.jsx
import React from "react";

const Affiliates = () => {
  const partners = [
    { name: "Nepal Rastra Bank", logo: "/public/affiliated/1-1.jpg" },
    { name: "Cooperative Board", logo: "/public/affiliated/2-1.jpg" },
    { name: "Insurance Partner", logo: "/public/affiliated/favicon.ico" },
    { name: "Audit Firm", logo: "/public/affiliated/3-1.jpg" },
    // Add more logos as needed
  ];

  return (
    <section className="py-12 bg-color-50 dark:bg-color-800">
      <div className="container centered px-4 text-color">
        <p>Financial solutions designed with our members' needs in mind</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 items-center justify-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Affiliates;
