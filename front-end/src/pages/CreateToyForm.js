
// import React, { useState } from 'react';
// import './CreateToyForm.css';

// const CreateToyForm = () => {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newToy = { name, description, price, image };

//     const response = await fetch('http://localhost:5000/api/toys', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newToy),
//     });

//     if (response.ok) {
//       setName('');
//       setDescription('');
//       setPrice('');
//       setImage('');
//       window.location.reload();
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Create a New Toy</h2>
//       <form onSubmit={handleSubmit} className="create-toy-form">
//         <div className="form-group">
//           <label>Name:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Description:</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Price:</label>
//           <input
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Image URL:</label>
//           <input
//             type="text"
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Add Toy</button>
//       </form>
//     </div>
//   );
// };

// export default CreateToyForm;

//////////////////
/////////////////////

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CreateToyForm.css';


const CreateToyForm = () => {
  const { id } = useParams(); // Get the toy ID from the URL
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (id) {
      const fetchToy = async () => {
        const response = await fetch(`http://localhost:5000/api/toys/${id}`);
        const toy = await response.json();
        setName(toy.name);
        setDescription(toy.description);
        setPrice(toy.price);
        setImage(toy.image);
      };

      fetchToy();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const toyData = { name, description, price, image };
    const url = id ? `http://localhost:5000/api/toys/${id}` : 'http://localhost:5000/api/toys';
    const method = id ? 'PUT' : 'POST';

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(toyData),
    });

    if (response.ok) {
      // Reload the page after successful submission
      window.location.reload();
    }
  };

  return (
    <div className="form-container">
      <h2>{id ? 'Update Toy' : 'Create a New Toy'}</h2>
      <form onSubmit={handleSubmit} className="create-toy-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button type="submit">{id ? 'Update Toy' : 'Add Toy'}</button>
      </form>
    </div>
  );
};

export default CreateToyForm;