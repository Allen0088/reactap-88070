import React from 'react';

export const MyCard = ({ objeto }) => {
return (
    <div style={{
width: "18rem",
padding: "1rem",
border: "1px solid #ddd",
borderRadius: "8px",
margin: "10px",
boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
<img
src={objeto.image}
alt={objeto.Producto}
style={{
width: "100%",
height: "200px",
objectFit: "cover"
}}
/>
<h3>{objeto.Producto} - {objeto.Categoria}</h3>
<p>Precio: ${objeto.Precio}</p>
<button style={{
background: "#007bff",
color: "white",
border: "none",
padding: "8px 16px",
cursor: "pointer",
borderRadius: "4px"
}}>
Ver
</button>
</div>
);
};