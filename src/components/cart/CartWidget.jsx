import React from 'react';
import { useCart } from '../../context/CartContext';

export const CartWidget = () => {
  const { getTotalItems } = useCart();
  const total = getTotalItems();

  return (
    <div className="cart-widget-container">
      <img 
        src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" 
        alt="carrito" 
        className="logoCarrito"
      />
      {total > 0 && (
        <span className="cart-count">{total}</span>
      )}
    </div>
  );
};