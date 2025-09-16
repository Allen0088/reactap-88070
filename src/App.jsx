import { useState } from "react";
import './App.css'
import { Navbar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  return( 
    <>
  <Navbar />
  <ItemListContainer bienvenida = "hola mundo!"/>
  </>
  )
}

export default App