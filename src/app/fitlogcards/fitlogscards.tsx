import { ICards } from "@/types/cards.types";
import Cards from "../../components/shared/cards";
import fitlogData from "@/data/fitlog.json";
import React from "react";

const Fitlogscards = async () => {
  const data: ICards[] = fitlogData;

  return (
    <div className="container mx-auto  px-6">
      <div className="space-y-2 lg:text-start text-center ">
        <h2 className="text-white text-3xl font-bold">THE LIBRARY</h2>
        <p>Twelve lifts covering every major muscle group.</p>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pt-8 pb-12">
        {data.map((card) => (
          <Cards key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Fitlogscards;
