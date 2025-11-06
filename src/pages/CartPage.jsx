
import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const CartPage = () => {
  const { cart, removeFromCart, getTotalPrice, clearCart } = useCart();
  const totalPrice = getTotalPrice();

  const handleCheckout = async () => {
    if (cart.length === 0) return;

    try {
      const db = getFirestore();
      const orden = {
        fecha: new Date().toISOString(),
        productos: cart.map(item => ({
          id: item.id,
          Producto: item.Producto,
          cantidad: item.cantidad,
          Precio: item.Precio
        })),
        total: totalPrice,
        estado: 'pendiente'
      };

      await addDoc(collection(db, 'ordenes'), orden);

      clearCart(); 
    } catch (error) {
      console.error('Error al crear la orden:', error);
      alert('Hubo un error al procesar la orden.');
    }
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>El carrito está vacío</h2>
        <Link to="/" className="continue-shopping-btn">Seguir comprando</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1 className="cart-title">Mi Carrito</h1>

      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img
              src={item.image}
              alt={item.Producto}
              className="cart-item-image"
            />
            <div className="cart-item-info">
              <h3>{item.Producto}</h3>
              <p>Cantidad: {item.cantidad}</p>
              <p>Precio unitario: ${item.Precio}</p>
              <p>Subtotal: ${item.Precio * item.cantidad}</p>
            </div>
            <button
              className="remove-button"
              onClick={() => removeFromCart(item.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <h2>Total: ${totalPrice}</h2>
        <div className="cart-actions">
          <Link to="/" className="continue-shopping-btn">Seguir comprando</Link>
          <button className="checkout-button" onClick={handleCheckout}>
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
