
import React from 'react';
import { Link } from "react-router-dom";

export const MyCard = ({ objeto }) => {
  return (
    <div className="section">
      <img
        src={objeto.image}
        alt={objeto.Producto}
        className="products"
      />
      <h3>{objeto.Producto} - {objeto.Categoria}</h3>
      <h5>{objeto.Detail}</h5>
      <p>Precio: ${objeto.Precio}</p>
      
      <Link 
        to={`/producto/${objeto.id}`} 
        className="card-button"
      >
        Ver
      </Link>
    </div>
  );
};