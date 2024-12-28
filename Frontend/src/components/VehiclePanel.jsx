import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanel(false);
        }}
        className="p-2 text-center w-[97%] absolute top-0"
      >
        <i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="font-semibold text-2xl mb-5">Choose a Vehicle</h3>
      <div
        onClick={() => {
          props.setConfirmRide(true);
        }}
        className="flex border-2 active:border-black rounded-xl w-full p-3 mb-2 items-center justify-between"
      >
        <img className="h-12" src="./src/assets/images/uber_car.png" alt="" />
        <div className="w-1/2">
          <h4 className="font-medium text-base">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹193.20</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRide(true);
        }}
        className="flex border-2 active:border-black rounded-xl w-full p-3 mb-2 items-center justify-between"
      >
        <img className="h-12" src="./src/assets/images/uber_bike.webp" alt="" />
        <div className="w-1/2 ml-2">
          <h4 className="font-medium text-base">
            Moto{" "}
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹65.00</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRide(true);
        }}
        className="flex border-2 active:border-black rounded-xl w-full p-3 mb-2 items-center justify-between"
      >
        <img className="h-12" src="./src/assets/images/uber_auto.png" alt="" />
        <div className="w-1/2">
          <h4 className="font-medium text-base">
            UberAuto{" "}
            <span>
              <i className="ri-user-3-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable auto rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹118.51</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
