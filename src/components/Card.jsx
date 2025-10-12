import React from 'react';

export const MyCard = ({ objeto }) => {
return (
    <div className="section">
<img
src={objeto.image}
alt={objeto.Producto} className="products"/>
<h3>{objeto.Producto} - {objeto.Categoria}</h3>
<p>Precio: ${objeto.Precio}</p>
<button className="botones">
Ver
</button>
</div>
);
};