import React, { useState } from "react";

function Adminuser() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleNameChange = (event) => setName(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handleImageChange = (event) => setImage(event.target.value);
  // {
  //     if (event.target.files.length > 0){
  //         setImage(event.target.files[0]);
  //     }else{
  //         setImage(null);
  //     }
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", name, description, image);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <button type="submit">Add Plant</button>
    </form>
  );
}

export default Adminuser;
