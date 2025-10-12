import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


export const Navbar = () => (
    <div className="navBar">
    <img src="https://cdn-icons-png.flaticon.com/128/18399/18399459.png" alt=" logo" />
    <ul className="nav-dos">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/remeras">Remeras</Link></li>
        <li><Link to="/zapatillas">Zapatillas</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </ul>
    <CartWidget/>
</div>
);