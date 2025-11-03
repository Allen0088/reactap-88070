import React, { createContext, useState, useContext, useEffect } from 'react';
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

 
  useEffect(() => {
    const saved = localStorage.getItem('cart');
    if (saved) {
      try {
        setCart(JSON.parse(saved));
      } catch (e) {
        setCart([]);
      }
    }
  }, []);

 
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

 

  const addToCart = (producto, cantidad = 1) => {
    setCart(prevCart => {
      const stockDisponible = producto.stock || Infinity;
      const yaEnCarrito = prevCart.find(item => item.id === producto.id);
      const cantidadActual = yaEnCarrito ? yaEnCarrito.cantidad : 0;
      const nuevaCantidad = cantidadActual + cantidad;

      if (nuevaCantidad > stockDisponible) {
        alert(`Solo hay ${stockDisponible} en stock`);
        return prevCart;
      }

      if (yaEnCarrito) {
        return prevCart.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: nuevaCantidad }
            : item
        );
      } else {
        return [...prevCart, { ...producto, cantidad }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => {
      const updatedCart = prevCart.filter(item => item.id !== id);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.cantidad, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.Precio * item.cantidad, 0);
  };

const hacerOrden = async () => {
  if (!window.firebaseApp || !window.firebaseAuth?.currentUser) {
    alert("Firebase no listo");
    return;
  }

  const db = getFirestore(window.firebaseApp);
  const user = window.firebaseAuth.currentUser;

  const orden = {
    items: cart,
    total: getTotalPrice(),
    fecha: serverTimestamp(),
    userId: user.uid,
    estado: "pendiente"
  };

  try {
    const docRef = await addDoc(collection(db, "ordenes"), orden);
    console.log("Orden guardada:", docRef.id);
    alert("¡Orden enviada!");
    clearCart();
  } catch (error) {
    console.error("Error:", error);
    alert("Error: " + error.message);
  }
};

  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalItems,
    getTotalPrice,
    hacerOrden,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};