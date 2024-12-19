import React, { useState } from 'react';
import axios from 'axios';

const DeleteItem = () => {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/pizzas/${id}`);
      setMessage('Pizza deleted successfully!');
      setId(''); // Clear the input field
    } catch (error) {
      setMessage('Error deleting pizza. Please check the ID and try again.');
    }
  };

  return (
    <div>
      <h2>Delete Pizza</h2>
      <input
        type="text"
        placeholder="Enter Pizza ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete Pizza</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteItem;
