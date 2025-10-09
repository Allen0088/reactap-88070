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
    setTimeout(() => res (data), 3000)
  })
  .then(respuesta => {
    setProducto(respuesta)
  })
  .catch(error => console.log(error))
  .finally(() => setLoading(false))
}, [])

if(loading) return <img src={cargando} className="loading-uno" />


  return( 
    <>
  <Navbar />
<ItemListContainer>
<CardList producto={producto}/>
</ItemListContainer>
  </>
  )
}

export default App