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
    <h5>{objeto.Detalle}</h5>
    <p>Precio: ${objeto.Precio}</p>
<button className="botones">
        <Link to={`/producto/${objeto.id}`} className="botones">
        Ver
        </Link>
    </button>
    </div>
);
};