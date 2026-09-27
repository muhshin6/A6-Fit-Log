"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const PlanSavedCount = () => {
  const [planCount, setPlanCount] = useState(0);
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    const updateCounts = () => {
      const plan: number[] = JSON.parse(
        localStorage.getItem("todayPlan") || "[]",
      );

      const saved: number[] = JSON.parse(
        localStorage.getItem("savedExercises") || "[]",
      );

      setPlanCount(plan.length);
      setSavedCount(saved.length);
    };

    const timer = setTimeout(updateCounts, 0);

    window.addEventListener("fitlog-storage", updateCounts);
    window.addEventListener("storage", updateCounts);

    return () => {
      clearTimeout(timer);

      window.removeEventListener("fitlog-storage", updateCounts);
      window.removeEventListener("storage", updateCounts);
    };
  }, []);

  return (
    <div className="flex items-center gap-6 font-semibold">
      <Link href="/myplan" className="flex items-center gap-2">
        Plan

        <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-lime-300 px-2 text-xs font-bold text-black">
          {planCount}
        </span>
      </Link>

      <Link href="/myplan" className="flex items-center gap-2">
        <span>Saved</span>

        <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-gray-500 px-2 text-xs font-bold">
          {savedCount}
        </span>
      </Link>
    </div>
  )
};

export default PlanSavedCount;
