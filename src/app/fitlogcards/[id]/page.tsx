import { ICards } from "@/types/cards.types";
import Image from "next/image";
import React from "react";
import fitlogData from "@/data/fitlog.json";
import ActionButtons from "@/components/shared/ActionButtons";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const FitlogDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  const cards: ICards[] = fitlogData;
  const card = cards.find((item) => String(item.id) === id);

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div className=" container mx-auto flex flex-col gap-8 px-4 py-8 sm:px-6 sm:py-12 md:flex-row lg:gap-14 ">
      {/* Image  */}
      <div className="w-full md:w-1/2">
        <Image
          src={card.image}
          alt={card.name}
          width={1000}
          height={500}
          className=" h-200 w-full object-cover rounded-2xl"
        />
      </div>

      {/* Details  */}
      <div className="flex flex-col gap-6 w-full md:w-1/2 ">
        <h1 className="text-3xl font-bold text-white uppercase ">
          {card.name}{" "}
        </h1>
        <p>{card.description} </p>

        {/* Muscle Groups */}
        <div className=" flex gap-3 ">
          {card.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-2xl text-black bg-lime-300 px-4 py-1  "
            >
              {" "}
              {muscle}{" "}
            </span>
          ))}
        </div>

        {/* Information */}
        <div className="bg-[#1E2330] rounded-2xl border  border-[#2f3030] mb-8 font-semibold ">
          <div className="grid grid-cols-2 p-4 border-b border-[#2f3030] ">
            <p>EQUIPMENT</p>
            <p>{card.equipment} </p>
          </div>

          <div className="grid grid-cols-2 p-4 border-b border-[#2f3030] ">
            <p>DIFFICULTY</p>
            <p> {card.difficulty} </p>
          </div>

          <div className="grid grid-cols-2 p-4 border-b border-[#2f3030] ">
            <p>SETS</p>
            <p> {card.sets} </p>
          </div>

          <div className="grid grid-cols-2 p-4 border-b border-[#2f3030]">
            <p>REPS</p>
            <p> {card.reps} </p>
          </div>

          <div className="grid grid-cols-2 p-4 border-b border-[#2f3030] ">
            <p>DURATION</p>
            <p> {card.duration} </p>
          </div>

          <div className="grid grid-cols-2 p-4 border-b border-[#2f3030] ">
            <p>CALORIES</p>
            <p> {card.caloriesBurned} </p>
          </div>

          <div className="grid grid-cols-2 p-4 ">
            <p>RATING</p>
            <p> {card.rating} </p>
          </div>
        </div>

        {/* Instruction */}
        <div>
          <div className="grid gap-4 pb-9">
            <h3>INSTRUCTIONS</h3>
            <div className="grid gap-3 text-xl">
              {card.instructions.map((instrac, index) => (
                <div key={instrac} className="flex gap-2">
                  <span className="font-semibold "> {index + 1}. </span>
                  <p> {instrac} </p>
                </div>
              ))}
            </div>
          </div>

          {/* Button */}
          <ActionButtons id={card.id} />
        </div>
      </div>
    </div>
  );
};

export default FitlogDetailPage;
