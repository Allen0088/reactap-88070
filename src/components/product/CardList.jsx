import React from 'react';
import { MyCard } from '../product/Card'; 

export const CardList = ({ producto }) => {
return (
    <div className="global">
    {producto.map(objeto => (
        <MyCard key={objeto.id} objeto={objeto} />
    ))}
    </div>
);
};