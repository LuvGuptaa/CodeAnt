import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import BitBucket from "../assets/bitbucket.png";
import Azure from "../assets/azure.png";
import Gitlab from "../assets/Gitlab.png";
import { FiKey } from "react-icons/fi";
import Logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export const LoginBox = () => {
  const [activeTab, setActiveTab] = useState("SAAS");
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSignIn = () => {
    navigate("/repositories");
  };

  return (
    <div className="w-11/12 flex flex-col items-center gap-4">
      <div className="w-full bg-white border border-divider rounded-2xl flex flex-col py-4 items-center">
        <div className="flex gap-4 items-center p-4 px-6 mb-8">
          <img src={Logo} alt="logo" height={30} width={30} />
          <p className="text-secondary text-3xl">CodeAnt AI</p>
        </div>
        <p className="text-secondary font-semibold text-3xl mb-4">
          Welcome to CodeAnt AI
        </p>
        <div className="w-full px-4">
          <div className=" rounded-2xl text-center flex lg:text-xl font-semibold text-[#414651] bg-[#FAFAFA]">
            <button
              className={`w-1/2 p-2 lg:py-4 rounded-l-2xl ${
                activeTab === "SAAS"
                  ? "bg-blue-500 text-white rounded-2xl"
                  : "bg-[#FAFAFA] text-[#414651]"
              }`}
              onClick={() => handleTabClick("SAAS")}
            >
              SAAS
            </button>
            <button
              className={`w-1/2 p-2 lg:py-4 rounded-r-2xl ${
                activeTab === "Self Hosted"
                  ? "bg-blue-500 text-white rounded-2xl"
                  : "bg-[#FAFAFA] text-[#414651]"
              }`}
              onClick={() => handleTabClick("Self Hosted")}
            >
              Self Hosted
            </button>
          </div>
        </div>
        <div className="w-full mt-4 font-semibold border-t border-component py-4 relative">
          <div
            className={`flex flex-col items-center gap-5 ${
              activeTab === "SAAS"
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <button
              className="flex items-center justify-center w-3/4 border border-buttons rounded-lg p-5"
              onClick={handleSignIn}
            >
              <span className="flex items-center gap-2">
                <FaGithub size={20} />
                Sign in with Github
              </span>
            </button>
            <button
              className="flex items-center justify-center w-3/4 border border-buttons rounded-lg p-5"
              onClick={handleSignIn}
            >
              <span className="flex items-center gap-2">
                <img src={BitBucket} alt="bitbucket" />
                Sign in with Bitbucket
              </span>
            </button>
            <button
              className="flex items-center justify-center w-3/4 border border-buttons rounded-lg p-5"
              onClick={handleSignIn}
            >
              <span className="flex items-center gap-2">
                <img src={Azure} alt="azure" />
                Sign in with Azure DevOps
              </span>
            </button>
            <button
              className="flex items-center justify-center w-3/4 border border-buttons rounded-lg p-5"
              onClick={handleSignIn}
            >
              <span className="flex items-center gap-2">
                <img src={Gitlab} alt="Gitlab" />
                Sign in with GitLab
              </span>
            </button>
          </div>
          <div
            className={`flex flex-col items-center gap-5 absolute top-4 w-full ${
              activeTab === "Self Hosted"
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <button
              className="flex items-center justify-center w-3/4 border border-buttons rounded-lg p-5"
              onClick={handleSignIn}
            >
              <span className="flex items-center gap-3">
                <img src={Gitlab} alt="Gitlab" />
                Self Hosted GitLab
              </span>
            </button>
            <button
              className="flex items-center justify-center w-3/4 border border-buttons rounded-lg p-5"
              onClick={handleSignIn}
            >
              <span className="flex items-center gap-2">
                <FiKey size={20} />
                Sign in with SSO
              </span>
            </button>
          </div>
        </div>
      </div>
      <p>
        By signing up you agree to the{" "}
        <a href="/" className="text-[#181D27] font-bold visited:text-[#181D27]">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
};
