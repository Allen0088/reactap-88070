import CartWidget from "./CartWidget";

export const Navbar = () => (
    <div className="navBar">
    <img src="https://cdn-icons-png.flaticon.com/128/18399/18399459.png" alt=" logo" />
    <ul className="nav-dos">
        <li>
            <a href="#">Home</a>
        </li>
        <li>
            <a href="">Remeras</a>
        </li>
        <li>
            <a href="">Zapatillas</a>
        </li>
        <li>
            <a href="">Contact</a>
        </li>
    </ul>
    <CartWidget/>
</div>
);