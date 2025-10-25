import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import data from "./data/MOCK_DATA.json";
import cargando from "./assets/cargando.png";
import { NavBar } from "./components/nav/NavBar";
import Home from "./pages/Home";        
import { ProductDetail } from "./pages/ProductDetail";
import { Contact } from "./pages/Contact";

function App() {
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    new Promise((res) => {
      setTimeout(() => res(data), 2000);
    })
      .then(respuesta => setProducto(respuesta))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <img src={cargando} className="loading-uno" />;

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home producto={producto} />} />
        <Route path="/remeras" element={<Home producto={producto.filter(p => p.Categoria === "Remeras")} />} />
        <Route path="/zapatillas" element={<Home producto={producto.filter(p => p.Categoria === "Calzado")} />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
} 

export default App;