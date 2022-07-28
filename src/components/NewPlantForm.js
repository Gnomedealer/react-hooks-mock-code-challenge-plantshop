import React, {useState} from "react";

const plantUrl = 'http://localhost:6001/plants'

function NewPlantForm({addPlant}) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')

  const handleSubmit = (event) => {
    event.preventdefault()
    fetch(plantUrl, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        image: image,
        price: price
      })
    })
    .then((res) => res.json())
    .then((newPlant) => addPlant(newPlant))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={(event) => setName(event.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" value={name} onChange={(event) => setImage(event.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price"value={name} onChange={(event) => setPrice(event.target.value)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
