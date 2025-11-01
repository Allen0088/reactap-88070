import React from 'react';
import { CardList } from '../components/product/CardList';

const Home = ({ producto }) => {
return (
    <div className="home-container">
    <div className="promo-banner">
        <h1>¡Descuentos exclusivos en los productos más populares!</h1>
        <p>¡No te quedes sin el tuyo!</p>
    </div>
    <CardList producto={producto} />
    <footer className="app-footer">
        <p>© 2025 Venus Shop. Todos los derechos reservados.</p>
        <div className="social-links">
        <a
            href="https://www.linkedin.com/in/elias-rivero-0750a0361/" 
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-icon"
            aria-label="LinkedIn"
        >
            <img
            src="https://cdn-icons-png.flaticon.com/128/174/174857.png"
            alt="LinkedIn"
            />
        </a>
        </div>
    </footer>
    </div>
);
};

export default Home;