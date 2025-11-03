import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import { NavBar } from "./components/nav/NavBar";
import Home from "./pages/Home";
import { ProductDetail } from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import { CartProvider } from "./context/CartContext";
import CartPage from './pages/CartPage';

// Firebase
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";

function App() {
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const app = window.firebaseApp;
    const db = getFirestore(app);
    const auth = getAuth(app);

    // LOGIN ANÓNIMO AUTOMÁTICO
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        signInAnonymously(auth)
          .then(() => console.log("Login anónimo exitoso"))
          .catch((err) => console.error("Error login:", err));
      }
    });

    // CARGAR PRODUCTOS
    const refCollection = collection(db, "items");
    getDocs(refCollection)
      .then((snapshot) => {
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducto(data);
      })
      .catch(error => {
        console.error('Error al cargar productos:', error);
      })
      .finally(() => setLoading(false));

    // Cleanup
    return () => unsubscribeAuth();
  }, []);

  if (loading) return <div className="loading">Cargando...</div>;

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