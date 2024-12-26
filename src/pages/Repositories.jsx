import React from "react";
import Logo from "../assets/logo.svg";
import SidebarMenu from "../components/SidebarMenu";
import SidebarMenuMobile from "../components/SidebarMenuMobile";
import RepositoriesComponent from "../components/RepositoriesComponent";

export const Repositories = () => {
  return (
    <div className="h-dvh w-dvw grid lg:grid-cols-5">
      {/* Sidebar for large screens */}
      <div className="hidden lg:block col-span-1 border-r border-divider h-full">
        <div className="flex gap-2 items-center p-4 px-6 mb-2">
          <img src={Logo} alt="logo" height={25} width={25} />
          <p className="text-secondary text-lg lg:text-2xl mt-[.5rem]">
            CodeAnt AI
          </p>
        </div>
        <SidebarMenu />
      </div>

      {/* Hamburger Menu for Mobile */}
      <SidebarMenuMobile />

      {/* Main Content */}
      <div className="lg:col-span-4 lg:p-4">
        <RepositoriesComponent />
      </div>
    </div>
  );
};
