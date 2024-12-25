import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url('https://as2.ftcdn.net/v2/jpg/04/31/49/77/1000_F_431497746_BPsIivtU8GLle5Ofr8M4Sp7LWjIIrJns.jpg')] h-screen pt-8 flex justify-between flex-col w-full">
        <img
          className="w-16 ml-8"
          src="./src/assets/images/uber.png"
          alt="Uber Image"
        />
        <div className="bg-white pb-7 px-4 py-4">
          <h2 className="text-3xl font-bold">Get Started with Uber</h2>
          <Link
            to="/login"
            className="flex items-center justify-content w-full bg-black text-white py-3 rounded mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
