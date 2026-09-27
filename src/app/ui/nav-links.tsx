"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Links = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8 font-semibold">
      <Link
        className={`font-semibold transition ${pathname === "/" ? "text-lime-300" : "text-gray-400 hover:text-white"}`}
        href="/"
      >
        Workouts
      </Link>
      <Link
        className={`font-semibold transition ${pathname.startsWith("/myplan") ? "text-lime-300" : "text-gray-400 hover:text-white"}`}
        href="/myplan"
      >
        My Plan
      </Link>
    </nav>
  );
};

export default Links;
