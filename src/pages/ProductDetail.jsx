// src/pages/ProductDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useCart } from '../context/CartContext';
import ItemCount from '../components/product/ItemCount';

// ❌ Eliminamos esta línea → NO EXISTE y no la necesitamos
// import './ProductDetail.css';

export const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, cart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enCarrito, setEnCarrito] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "items", id);

    getDoc(refDoc)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        } else {
          setProduct(null);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar producto:", error);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (product && cart.some(item => item.id === product.id)) {
      setEnCarrito(true);
    }
  }, [cart, product]);

  if (loading) return <div className="loading">Cargando...</div>;
  if (!product) return <div className="loading">Producto no encontrado</div>;

  const handleAddToCart = (cantidad) => {
    addToCart(product, cantidad);
    setEnCarrito(true);
  };

  return (
    <div className="product-detail-container">
      <div className="product-image">
        {product.image && (
          <img
            src={product.image}
            alt={product.Producto}
            className="main-image"
          />
        )}
      </div>

      <div className="product-info">
        <h1 className="product-title">{product.Producto}</h1>
        <p className="product-price">${product.Precio}</p>
        <p className="product-stock">Stock disponible: {product.Stock}</p>

        {enCarrito ? (
          <p className="already-in-cart">✅ Ya está en el carrito</p>
        ) : (
          <ItemCount
            stock={product.Stock}
            initial={1}
            onAdd={handleAddToCart}
          />
        )}

        <div className="product-description">
          <h3>Descripción</h3>
          <p>{product.Detail}</p>
        </div>
      </div>
    </div>
  );
};