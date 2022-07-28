import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, deletePlants, updatePlants}) {
  return (
    <ul className="cards">{plants.map((plants) => {
      return (
        <PlantCard
        key={plants.id}
        plant={plants}
        deletePlants={deletePlants}
        updatePlants={updatePlants}
        />
      )
    })}</ul>
  );
}

export default PlantList;
