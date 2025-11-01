import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import cargando from "./assets/cargando.png";
import { NavBar } from "./components/nav/NavBar";
import Home from "./pages/Home";        
import { ProductDetail } from "./pages/ProductDetail";
import  Contact  from "./pages/Contact";
import { CartProvider } from "./context/CartContext";
import CartPage from './pages/CartPage';
import { getFirestore, getDocs, collection, query, where  } from "firebase/firestore";

function App() {
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
    const db = getFirestore();
    const refCollection = collection(db, "items");

    getDocs(refCollection)
      .then((snapshot) => {
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducto(data);
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <img src={cargando} className="loading-uno" />;

  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home producto={producto} />} />
        <Route path="/remeras" element={<Home producto={producto.filter(p => p.Categoria === "Remeras")} />} />
        <Route path="/zapatillas" element={<Home producto={producto.filter(p => p.Categoria === "Calzado")} />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/carrito" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
} 

export default App;