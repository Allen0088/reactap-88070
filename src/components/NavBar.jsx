import CartWidget from "./CartWidget";

export const Navbar = () => (
    <div className="navBar">
    <img src="https://cdn-icons-png.flaticon.com/128/18399/18399459.png" alt=" logo" />
    <ul>
        <li>
            <a href="#">Home</a>
        </li>
        <li>
            <a href="">Women</a>
        </li>
        <li>
            <a href="">Man</a>
        </li>
        <li>
            <a href="">Contact</a>
        </li>
    </ul>
    <CartWidget/>
</div>
);