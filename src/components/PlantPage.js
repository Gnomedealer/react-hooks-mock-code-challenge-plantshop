import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const plantUrl = 'http://localhost:6001/plants'



function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(plantUrl)
    .then((res) => res.json())
    .then((plantData) => 
      setPlants(plantData)
    )
  }, [])

  const handleAddPlants = (newPlants) => {
    const updatedArrayPlants = [...plants, newPlants]
    setPlants(updatedArrayPlants)
  }

  const handleDeletePlants = (id) => {
    const updatedArrayPlants = plants.filter((plant) => plant.id !== id)
    setPlants(updatedArrayPlants)
    
  }

  function handleUpdatePlants(updatedPlant) {
    const updatedArrayPlants = plants.map((plant) => {
      if (plant.id === updatedPlant.id) {
        return updatedPlant
      }
      else {
        return plant
      }
    })
  }
  // console.log('above',plants)
  const displayPlants = plants.filter((plant) => 
    plant.name.toLowerCase().includes(search.toLowerCase())
  )
  // console.log('below',plants)

  return (
    <main>
      <NewPlantForm onAddplant={handleAddPlants}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={displayPlants} deletePlants={handleDeletePlants} updatePlants={handleUpdatePlants}/>
    </main>
  );
}

export default PlantPage;
