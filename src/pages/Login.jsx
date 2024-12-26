import React from "react";
import Subtract from "../assets/Subtract.png";
import { ContentBox } from "../components/ContentBox";
import { LoginBox } from "../components/LoginBox";

export const Login = () => {
  return (
    <div className=" h-dvh w-dvw grid grid-cols-1 lg:grid-cols-2">
      <div className="justify-center items-center hidden lg:flex">
        <div className="relative mt-[-12rem]">
          <ContentBox />
        </div>
        <div className="absolute bottom-0 left-0 -z-20">
          <img src={Subtract} alt="Subtract" />
        </div>
      </div>
      <div className="bg-[#FAFAFA] border-l border-l-divider flex justify-center items-center">
        <LoginBox />
      </div>
    </div>
  );
};
