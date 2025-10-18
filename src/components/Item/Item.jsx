
import "./Item.css";

export const Item = ({ name, price, description, image, children }) => {
  return (
    <article className="product-item">
      <img src={`/data/${image}`} alt={name} />
      <h2 className="product-title">{name}</h2>
      <p>Descripción: {description}</p>
      <p>Precio: ${price}</p>
      {children}
    </article>
  );
};
