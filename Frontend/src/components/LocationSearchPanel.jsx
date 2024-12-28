import React from "react";
import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = (props) => {
  const locations = [
    "24B, Near Kapoor's cafe, Sheriyan's Coding School, Bhopal",
    "Melrose bye pass near BB girls inter college, Aligarh, UP",
    "221C near Star Bucks cafe, building no.7, Gurgaon",
    "24B, Near Chunnugoli's cafe, lauda's Coding School, Bhopal",
  ];

  return (
    <div>
      {locations.map((elem, index) => (
        <div
          onClick={() => {
            props.setVehiclePanel(true);
            props.setPanelOpen(false);
          }}
          key={index}
          className="flex gap-4 border-2 border-gray-50 active:border-black p-3 rounded-xl items-center my-2 justify-start"
        >
          <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{elem}</h4>
        </div>
      ))}
      {/* Sample data for demonstration */}
    </div>
  );
};

export default LocationSearchPanel;
