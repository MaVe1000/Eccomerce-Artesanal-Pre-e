import { Link } from "react-router-dom";
import {useCartContext} from "../../context/CartContext/useCartContext";
import "./Nav.css";


export const Nav = () => {
  const {getTotalItems}= useCartContext();

  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Inicio</Link>
        </li>
      <li>
          <Link to={"/category/ceramica"}>Cerámica</Link>
        </li>
          <li>
          <Link to={"/category/textiles"}>Textiles</Link>
        </li>
        <li>
          <Link to={"/category/arte"}>Arte</Link>
        </li>
        <li>
          <Link to={"/category/joyeria"}>Joyería</Link>
        </li>
        <li>
          <Link to={"/category/cosmetica"}>Cosmética</Link>
        </li>
        <li>
          <Link>Carrito</Link>
          {getTotalItems()> 0 && (
            <span className="in-cart">{getTotalItems()}</span>
          )}
        </li>
      </ul>
    </nav>
  );
};