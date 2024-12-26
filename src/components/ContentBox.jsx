import React from "react";
import Logo from "../assets/logo.svg";
import Pie from "../assets/pie.png";
import { ArrowUpOutlined } from "@ant-design/icons";

export const ContentBox = () => {
  return (
    <div>
      <div className=" w-full bg-white shadow-box rounded-2xl">
        <div className="flex gap-4 items-center  p-4 px-6 border-b-divider border-b border-solid">
          <img src={Logo} alt="logo" height={30} width={30} />
          <p className=" text-secondary font-bold text-xl">
            AI to Detect & Autofix Bad Code
          </p>
        </div>
        <div className="flex gap-12 justify-evenly items-center p-8 px-6">
          <div className="flex flex-col items-center">
            <p className=" font-bold text-secondary text-xl">30+</p>
            <p className=" text-sm">Languages Support</p>
          </div>
          <div className="flex flex-col items-center mr-4">
            <p className=" font-bold text-secondary text-xl">10K+</p>
            <p className=" text-sm">Developers</p>
          </div>
          <div className="flex flex-col items-center mr-4">
            <p className=" font-bold text-secondary text-xl">100K+</p>
            <p className=" text-sm">Hours Saved</p>
          </div>
        </div>
      </div>
      <div className="absolute top-[95%] left-1/2">
        <div className="w-[120%] bg-white shadow-box rounded-2xl p-4 px-6">
          <div className="flex gap-24 justify-between pb-4">
            <img src={Pie} alt="pie" height={50} />
            <div className="flex flex-col">
              <p className=" text-[#0049C6] font-bold flex gap-1">
                <ArrowUpOutlined />
                14%
              </p>
              <p className="text-sm">This week</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 font-bold">
            <p className=" text-sm">Issues Fixes</p>
            <p className="text-3xl">500K+</p>
          </div>
        </div>
      </div>
    </div>
  );
};
