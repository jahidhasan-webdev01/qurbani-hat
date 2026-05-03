"use client";

import { useState } from "react";
import AnimalCard from "./AnimalCard";

const AnimalList = ({ animals }) => {
  const [sortedAnimals, setSortedAnimals] = useState(animals);

  const handleSort = (type) => {
    let sorted = [...sortedAnimals];

    if (type === "low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (type === "high") {
      sorted.sort((a, b) => b.price - a.price);
    }

    setSortedAnimals(sorted);
  };

  return (
    <>
      <select
        defaultValue=""
        onChange={(e) => handleSort(e.target.value)}
        className="select mt-5"
      >
        <option value="" disabled>Sort by price</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        {sortedAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </>
  );
};

export default AnimalList;