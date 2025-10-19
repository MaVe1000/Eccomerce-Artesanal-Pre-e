import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Tierra Viva. Todos los derechos reservados.</p>
        <nav className="footer-nav">
          <a href="#">Contacto</a>
          <a href="#">Términos y Condiciones</a>
          <a href="#">Política de Privacidad</a>
        </nav>
      </div>
      <p className="dev-vero">Desarrollado por M. Verónica Rebolleda</p>
    </footer>
  );
};