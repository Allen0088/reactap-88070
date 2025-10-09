import React from 'react';
import { MyCard } from './Card';

export const CardList = ({ producto }) => {

return (
    <div style={{
display: 'flex',
flexWrap: 'wrap',
gap: '20px',
padding: '20px',
justifyContent: 'center'
    }}>
{producto.map(objeto => (
        <MyCard key={objeto.id} objeto={objeto} />
))}
    </div>
);
};