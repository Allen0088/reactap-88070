import { BrowserRouter,  Routes , Route } from "react-router-dom";

import { useEffect, useState } from "react";
import './App.css'
import data from "./components/data/MOCK_DATA.json"
import cargando from "./assets/cargando.png"
import { Navbar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { CardList } from "./components/CardList"; 
import { MyCard } from './components/Card';

function App() {
const [producto, setProducto] = useState([])
const [loading, setLoading]= useState(true)

useEffect(() => {
  new Promise ((res, rej) => {
    setTimeout(() => res (data), 2000)
  })
  .then(respuesta => {
    setProducto(respuesta)
  })
  .catch(error => console.log(error))
  .finally(() => setLoading(false))
}, [])

if(loading) return <img src={cargando} className="loading-uno" />


  return( 
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={
        <ItemListContainer>
          <CardList producto={producto} />
        </ItemListContainer>
      } />
      
      <Route path="/remeras" element={
        <ItemListContainer>
          <CardList producto={producto.filter(p => p.Categoria === "Remeras")} />
        </ItemListContainer>
      } />

      <Route path="/zapatillas" element={
        <ItemListContainer>
          <CardList producto={producto.filter(p => p.Categoria === "Calzado")} />
        </ItemListContainer>
      } />

      <Route path="/contact" element={<h2>Contacto </h2>} />
      <Route path="*" element={<h2>Error</h2>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App