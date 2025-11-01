import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { getFirestore, getDoc, doc } from "firebase/firestore";
import ItemCount from '../components/product/ItemCount';

export const ProductDetail = () => {
const { id } = useParams();
const { cart, addToCart } = useCart();

const [producto, setProducto] = useState(null);
  const [enCarrito, setEnCarrito] = useState(false); // ✅ Estado para saber si ya está en el carrito

useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "items", id);

    getDoc(refDoc)
    .then((snapshot) => {
        if (snapshot.exists()) {
        setProducto({ id: snapshot.id, ...snapshot.data() });
        } else {
        console.log("Producto no encontrado");
        }
    })
    .catch(error => console.log(error));
}, [id]);

useEffect(() => {
if (producto && cart.length > 0) {
    setEnCarrito(cart.some(item => item.id === producto.id));
    }
}, [cart, producto]);
if (!producto) {
    return <h2>Cargando...</h2>;
}

const handleAddToCart = (cantidad) => {
    addToCart(producto, cantidad);
    setEnCarrito(true); 
};

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
        <p className="product-stock">Stock disponible: {producto.stock}</p>

        {enCarrito ? (
        <p className="already-in-cart">Ya está en el carrito</p>
        ) : (
        <ItemCount
            stock={producto.stock}
            initial={1}
            onAdd={handleAddToCart}
        />
        )}

        <div className="product-description">
        <h3>Descripción</h3>
        <p>{producto.Categoria} de alta calidad importado.</p>
        </div>
    </div>
    </div>
);
};