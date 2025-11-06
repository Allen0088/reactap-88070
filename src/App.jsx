import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/nav/NavBar';
import Home from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import Contact from './pages/Contact';
import { CartProvider } from './context/CartContext';
import CartPage from './pages/CartPage';

import {
  getFirestore,
  collection,
  getDocs
} from 'firebase/firestore';

import './App.css';

function App() {
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const db = getFirestore();
    const refCollection = collection(db, "items");

    getDocs(refCollection)
      .then((snapshot) => {
        const productos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducto(productos); 
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home producto={producto} />} />
          <Route
            path="/remeras"
            element={<Home producto={producto.filter(p => p.Categoria === 'Remeras')} />}
          />
          <Route
            path="/zapatillas"
            element={<Home producto={producto.filter(p => p.Categoria === 'Calzado')} />}
          />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/carrito" element={<CartPage />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;