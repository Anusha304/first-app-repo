import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayAllItems = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      const response = await axios.get('http://localhost:5000/pizzas');
      setPizzas(response.data);
    };
    fetchPizzas();
  }, []);

  return (
    <div className="container">
      <h1>All Pizzas</h1>
      <div className="row">
        {pizzas.map(pizza => (
          <div className="col-md-4" key={pizza.id}>
            <div className="card mb-4">
              <img src={pizza.imageUrl} className="card-img-top img-fluid" alt={pizza.name} />
              <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text">${pizza.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayAllItems;