import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Nav.css";

const LOGO_PATH = "/images/logo.png";

export const Nav = () => {
  const { getTotalItems } = useCartContext();

  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado (abrir/cerrar)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función para cerrar el menú después de hacer clic en un enlace (UX)
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="main-nav">

      <div className="nav-logo">
        <Link to={"/"} onClick={closeMenu}>
          <img src={LOGO_PATH} alt="Tierra Viva Logo" />
        </Link>
      </div>

      <button className="nav-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to={"/"} onClick={closeMenu}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to={"/category/ceramica"} onClick={closeMenu}>Cerámica</Link>
        </li>
        <li>
          <Link to={"/category/textiles"} onClick={closeMenu}>Textiles</Link>
        </li>
        <li>
          <Link to={"/category/arte"} onClick={closeMenu}>Arte</Link>
        </li>
        <li>
          <Link to={"/category/joyeria"} onClick={closeMenu}>Joyería</Link>
        </li>
        <li>
          <Link to={"/category/cosmetica"} onClick={closeMenu}>Cosmética</Link>
        </li>
        <li className="cart-link">
          <Link to={"/cart"} onClick={closeMenu}>Carrito</Link>
          {getTotalItems() > 0 && (
            <span className="in-cart">{getTotalItems()}</span>
          )}
        </li>
      </ul>
    </nav>
  );
};
