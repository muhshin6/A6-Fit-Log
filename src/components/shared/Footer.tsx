import Image from "next/image";
import logo from "@/assets/SVG.png";
import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto flex justify-between items-center pt-10 pb-10 px-6 bg-[#090A0D] border-t-3 border-[#1e232b]">
      <div className="flex items-center gap-2">
        <Image
          src={logo}
          alt="Fit Log"
          width={400}
          height={200}
          className="w-6 h-6 object-cover "
        />
        <h3 className="text-white font-semibold text-lg">FITLOG</h3>
      </div>
      <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
    </div>
  );
};

export default Footer;
