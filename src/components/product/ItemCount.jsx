// src/components/product/ItemCount.jsx
import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="item-count">
      <div className="count-controls">
        <button
          className="count-btn"
          onClick={decrement}
          disabled={count <= 1}
        >
          -
        </button>
        <span className="count-display">{count}</span>
        <button
          className="count-btn"
          onClick={increment}
          disabled={count >= stock}
        >
          +
        </button>
      </div>
      <button
        className="add-to-cart-btn"
        onClick={() => onAdd(count)}
        disabled={stock <= 0}
      >
        {stock > 0 ? 'Agregar al carrito' : 'Sin stock'}
      </button>
    </div>
  );
};

export default ItemCount;