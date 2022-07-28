import React, {useState} from "react";

const plantUrl = 'http://localhost:6001/plants'

function PlantCard({plant, deletePlants, updatePlants}) {
  const {id, name, image, price} = plant
  const [inStock, setInStock] = useState(true)
  const [updatePrice, setUpdatePrice] = useState(price)

  const handleStock = () => {
    setInStock((inStock) => !inStock)
  }

  const handleDeleteClick = () => {
    fetch((plantUrl + id), {
      method: 'DELETE'
    })

    deletePlants(id)
  }
  const handlePriceSubmit = (event) => {
    event.preventdefault()
    fetch((plantUrl + id), {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({price: updatePrice}),
    })
      .then((res) => res.json())
      .then((updatePlants) => {
      updatePlants(updatePlants)
    })
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleStock}>In Stock</button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
      <button onClick={handleDeleteClick}>Delete</button>
      <form onSubmit={handlePriceSubmit}>
        <input
          type='number'
          step='0.01'
          placeholder='New price...'
          value={updatePrice}
          onChange={(event) => setUpdatePrice(parseFloat(event.target.value))}
          />
        <buttom type='submit'>Update Price</buttom>
      </form>
    </li>
  );
      }
export default PlantCard;
