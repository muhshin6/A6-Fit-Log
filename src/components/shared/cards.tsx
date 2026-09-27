import { ICards } from "@/types/cards.types";
import { faClock, faStar } from "@fortawesome/free-regular-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";


interface CardsProps {
  card: ICards;
}

const Cards = ({ card }: CardsProps) => {
  return (
    <Link href={`/fitlogcards/${card.id}`}>
      <div className="rounded-2xl border border-[#2f3030] bg-[#191c22] overflow-hidden duration-500 hover:scale-105">
        <Image
          src={card.image}
          alt={card.name}
          width={1000}
          height={600}
          className="w-full h-auto object-cover rounded-t-2xl"
        />

        <div className="flex flex-col p-6 gap-4">
          <div className=" border-b border-[#2f3030] pb-4 space-y-2 ">
            <div className="flex gap-3 ">
              {card.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-2xl text-black bg-lime-300 px-5 py-1  "
                >
                  {" "}
                  {muscle}{" "}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-semibold text-white uppercase pt-4">
              {card.name}{" "}
            </h3>
            <p>{card.equipment} </p>
          </div>
          <div className="flex flex-wrap gap-7 text-xl ">
            <div className="flex items-center gap-2 ">
              <FontAwesomeIcon icon={faClock} className="h-4 w-4 " />
              <p>{card.duration} </p>
            </div>
            <div className="flex items-center gap-2 ">
              <FontAwesomeIcon icon={faFire} className="h-4 w-4 " />
              <p>{card.caloriesBurned} </p>
            </div>
            <div className="flex items-center gap-2  ">
              <FontAwesomeIcon icon={faStar} className="h-4 w-4 " />
              <p>{card.rating} </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
