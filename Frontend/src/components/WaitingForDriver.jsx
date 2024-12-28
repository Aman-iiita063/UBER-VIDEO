import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setWaitingForDriver(false);
        }}
        className="p-2 text-center w-[97%] absolute top-0"
      >
        <i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
      </h5>
      <div className="flex items-center justify-between">
        <img className="h-14" src="./src/assets/images/uber_car.png" alt="" />
        <div className="text-right">
          <h2 className="text-lg font-medium ">Aman</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">UP 81 AR 9177</h4>
          <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-between items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab Ahemdabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-square-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab Ahemdabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-cash-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.11</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
