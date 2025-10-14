import React from 'react';
import { useParams } from 'react-router-dom';
import data from './data/MOCK_DATA.json';

export const ItemDetailContainer = () => {
const { id } = useParams(); 

const producto = data.find(p => p.id === id)
if (!producto) {
    return (
<div style={{ padding: '20px', textAlign: 'center' }}>
<h2>Producto no encontrado</h2>
</div>
);
}
return (
    <div className="product-detail-container">
      
    <div className="product-image">
        <img
        src={producto.image.trim()}
        alt={producto.Producto}
        className="main-image"
        />
    </div>

      
    <div className="product-info">
        <h1 className="product-title">{producto.Producto}</h1>
        <p className="product-price">${producto.Precio}</p>

        
        <button className="add-to-cart">Agregar al carrito</button>

        
        <div className="product-description">
        <h3>Descripción</h3>
        <p>{producto.Categoria} de alta calidad importado.</p>
        </div>
    </div>
    </div>
);
};