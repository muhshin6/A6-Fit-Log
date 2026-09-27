"use client";

import {
  faBookmark,
  faCalendarPlus,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import { useState } from "react";

interface ActionButtonsProps {
  id: number;
}

const ActionButtons = ({ id }: ActionButtonsProps) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isPlanned, setIsPlanned] = useState(false);

  const handleSaveForLater = () => {
    const saved: number[] = JSON.parse(
      localStorage.getItem("savedExercises") || "[]",
    );

    if (saved.includes(id)) {
      const updated = saved.filter((item) => item !== id);

      localStorage.setItem("savedExercises", JSON.stringify(updated));

      window.dispatchEvent(new Event("fitlog-storage"));

      setIsSaved(false);
      toast.info("Removed from saved!");
    } else {
      const updated = [...saved, id];

      localStorage.setItem("savedExercises", JSON.stringify(updated));

      setIsSaved(true);
      toast.success("Saved for later!");
    }
  };

  const handleAddToPlan = () => {
    const planned: number[] = JSON.parse(
      localStorage.getItem("todayPlan") || "[]",
    );

    if (planned.includes(id)) {
      const updated = planned.filter((item) => item !== id);

      localStorage.setItem("todayPlan", JSON.stringify(updated));

      window.dispatchEvent(new Event("fitlog-storage"));

      setIsPlanned(false);
      toast.info("Removed from today's plan!");
    } else {
      const updated = [...planned, id];

      localStorage.setItem("todayPlan", JSON.stringify(updated));

      setIsPlanned(true);
      toast.success("Added to today's plan!");
    }
  };

  return (
    <div className="flex flex-wrap gap-5">
      {/* Today's Plan */}
      <button
        onClick={handleAddToPlan}
        className={`flex items-center gap-2 rounded-lg px-6 py-3 font-semibold ${
          isPlanned ? "bg-green-500 text-white" : "bg-lime-300 text-black"
        }`}
      >
        <FontAwesomeIcon icon={faCalendarPlus} className="h-4 w-4" />

        <span>
          {isPlanned ? "Added to today's plan" : "Add to today's plan"}
        </span>
      </button>

      {/* Save */}
      <button
        onClick={handleSaveForLater}
        className={`flex items-center gap-2 rounded-lg border px-6 py-3 font-semibold ${
          isSaved
            ? "border-lime-300 bg-lime-300 text-black"
            : "border-[#484949] text-white"
        }`}
      >
        <FontAwesomeIcon icon={faBookmark} className="h-5 w-5" />

        <span>{isSaved ? "Saved" : "Save for later"}</span>
      </button>
    </div>
  );
};

export default ActionButtons;
