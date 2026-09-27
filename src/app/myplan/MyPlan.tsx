"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import fitlogData from "@/data/fitlog.json";
import { ICards } from "@/types/cards.types";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar } from "@fortawesome/free-regular-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const cards: ICards[] = fitlogData;

type Tab = "plan" | "saved";
type SortOption = "duration" | "calories" | "rating" | "name";

const MyPlanPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("plan");
  const [planIds, setPlanIds] = useState<number[]>([]);
  const [savedIds, setSavedIds] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("duration");

  // Load localStorage data
  useEffect(() => {
    const loadData = () => {
      const plan: number[] = JSON.parse(
        localStorage.getItem("todayPlan") || "[]",
      );

      const saved: number[] = JSON.parse(
        localStorage.getItem("savedExercises") || "[]",
      );

      setPlanIds(plan);
      setSavedIds(saved);
    };
    loadData();

    window.addEventListener("fitlog-storage", loadData);
    window.addEventListener("storage", loadData);

    return () => {
      window.removeEventListener("fitlog-storage", loadData);
      window.removeEventListener("storage", loadData);
    };
  }, []);

  // Get current exercises
  const currentExercises = useMemo(() => {
    const ids = activeTab === "plan" ? planIds : savedIds;

    return cards.filter((card) => ids.includes(card.id));
  }, [activeTab, planIds, savedIds]);

  // Sort
  const sortedExercises = useMemo(() => {
    const data = [...currentExercises];

    switch (sortBy) {
      case "duration":
        return data.sort((a, b) => b.duration - a.duration);

      case "calories":
        return data.sort((a, b) => b.caloriesBurned - a.caloriesBurned);

      case "rating":
        return data.sort((a, b) => b.rating - a.rating);

      case "name":
        return data.sort((a, b) => a.name.localeCompare(b.name));

      default:
        return data;
    }
  }, [currentExercises, sortBy]);

  // Statistics
  const totalMinutes = currentExercises.reduce(
    (total, item) => total + item.duration,
    0,
  );

  const totalCalories = currentExercises.reduce(
    (total, item) => total + item.caloriesBurned,
    0,
  );

  // Remove from today's plan
  const removeFromPlan = (id: number) => {
    const updated = planIds.filter((item) => item !== id);

    setPlanIds(updated);

    localStorage.setItem("todayPlan", JSON.stringify(updated));

    window.dispatchEvent(new Event("fitlog-storage"));
    toast.success("Exercise removed from today's plan!");
  };

  // Remove from saved
  const removeFromSaved = (id: number) => {
    const updated = savedIds.filter((item) => item !== id);

    setSavedIds(updated);

    localStorage.setItem("savedExercises", JSON.stringify(updated));

    window.dispatchEvent(new Event("fitlog-storage"));
    toast.success("Exercise removed from today's plan!");
  };

  return (
    <main className="container mx-auto min-h-screen px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className=" md:text-start text-center mb-8">
        <h1 className="text-4xl font-bold uppercase text-white">MY PLAN</h1>

        <p className="mt-2 text-gray-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Statistics */}
      <div className="mb-10 grid grid-cols-1 overflow-hidden rounded-2xl border border-[#2f3030] bg-[#1E2330] sm:grid-cols-3">
        <div className="border-b border-[#2f3030] p-6 sm:border-b-0 sm:border-r">
          <p className="text-sm text-gray-400">Exercises</p>

          <p className="mt-2 text-4xl font-bold text-lime-300">
            {currentExercises.length}
          </p>
        </div>

        <div className="border-b border-[#2f3030] p-6 sm:border-b-0 sm:border-r">
          <p className="text-sm text-gray-400">Minutes</p>

          <p className="mt-2 text-4xl font-bold text-white">{totalMinutes}</p>
        </div>

        <div className="p-6">
          <p className="text-sm text-gray-400">Calories</p>

          <p className="mt-2 text-4xl font-bold text-white">{totalCalories}</p>
        </div>
      </div>

      {/* Tabs + Sort */}
      <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        {/* Tabs */}
        <div className="flex w-fit rounded-xl bg-[#1E2330] p-1">
          <button
            onClick={() => setActiveTab("plan")}
            className={`rounded-lg px-5 py-3 font-semibold transition ${
              activeTab === "plan"
                ? "bg-[#111213] text-lime-300"
                : "text-gray-400"
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-lg px-5 py-3 font-semibold transition ${
              activeTab === "saved"
                ? "bg-[#141516] text-lime-300"
                : "text-gray-400"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Sort */}
        <div className="flex flex-col gap-2">
          <label htmlFor="sort" className="text-sm font-medium text-gray-400">
            Sort By
          </label>

          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="rounded-xl border border-[#34383f] bg-transparent px-5 py-3 text-white outline-none"
          >
            <option value="duration" className="bg-[#1E2330]">
              Duration
            </option>

            <option value="calories" className="bg-[#1E2330]">
              Calories
            </option>

            <option value="rating" className="bg-[#1E2330]">
              Rating
            </option>

            <option value="name" className="bg-[#1E2330]">
              Name
            </option>
          </select>
        </div>
      </div>

      {/* Exercise List */}
      {sortedExercises.length === 0 ? (
        <div className="flex min-h-75 flex-col items-center justify-center rounded-2xl border border-[#2f3030] bg-[#1E2330] px-6 text-center">
          <h2 className="text-2xl font-bold uppercase text-white">
            NOTHING HERE YET
          </h2>

          <p className="mt-3 max-w-md text-gray-400">
            {activeTab === "plan"
              ? "Browse the library and add a lift to get today moving."
              : "Save some exercises from the library and they will appear here."}
          </p>

          <Link
            href="/"
            className="mt-6 rounded-xl bg-lime-300 px-6 py-3 font-bold text-black transition hover:bg-lime-400"
          >
            Go to workouts
          </Link>
        </div>
      ) : (
        <div className=" flex flex-col gap-5">
          {sortedExercises.map((card) => (
            <div
              key={card.id}
              className="flex p-3 justify-between overflow-hidden rounded-2xl border border-[#2f3030] bg-[#1E2330]"
            >
              <div className="flex gap-2 ">
                <Image
                  src={card.image}
                  alt={card.name}
                  width={200}
                  height={100}
                  className="h-35 w-ful rounded-2xl object-cover"
                />

                {/* Content */}
                <div className="flex flex-col px-6 justify-center  gap-3 text-sm">
                  <div className="space-y-2 ">
                    <h2 className="text-xl font-bold uppercase text-white">
                      {card.name}
                    </h2>

                    <p>{card.equipment}</p>
                  </div>

                  <div className="flex gap-5">
                    <div className="flex gap-2 items-center text-white font-semibold">
                      <FontAwesomeIcon
                        icon={faClock}
                        className="text-lime-300"
                      />
                      {card.duration} min
                    </div>

                    <div className="flex gap-2 items-center text-white font-semibold">
                      <FontAwesomeIcon
                        icon={faFire}
                        className="text-lime-300"
                      />
                      {card.caloriesBurned} kcal
                    </div>

                    <div className="flex gap-2 items-center text-white font-semibold">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-lime-300"
                      />
                      {card.rating}
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center space-x-3">
                <Link
                  href={`/fitlogcards/${card.id}`}
                  className="rounded-4xl border px-4 py-2 font-semibold hover:bg-lime-400"
                >
                  View Details
                </Link>

                <button
                  onClick={() =>
                    activeTab === "plan"
                      ? removeFromPlan(card.id)
                      : removeFromSaved(card.id)
                  }
                  className="rounded-4xl  p-2 font-semibold text-white hover:bg-[#292F3D]"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default MyPlanPage;
