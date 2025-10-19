import "./Hero.css";

export const Hero = () =>{
    return (
        <div className="hero-container">
      <div className="hero-content">
        <h1>Tierra Viva</h1>
        <h2>Artesanía con Alma y Origen Local</h2>
        <button className="explore-button">Explora la Colección</button>
      </div>
      <div className="hero-image-overlay">
        {/* usar fondo */}
      </div>
    </div>
    );
};