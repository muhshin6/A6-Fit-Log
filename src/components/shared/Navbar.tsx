import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import PlanSavedCount from "./PlanSavedCount";
import Links from "@/app/ui/nav-links";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#080808] border-b border-[#1e232b]">
      <div className=" container mx-auto flex items-center justify-between w-full min-h-20 px-6  ">
        <div className="flex items-center gap-2.5 ">
          <Image src={logo} width={30} height={30} alt="Fitlog Logo" />
          <h1 className="font-bold text-xl text-white">FITLOG</h1>
        </div>
        <Links />

        <PlanSavedCount />
      </div>
    </nav>
  );
};

export default Navbar;
