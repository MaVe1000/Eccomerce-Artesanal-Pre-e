import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Hubo un problema al cargar los productos");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.err(err);
      });
  }, []);

  return (
    <section>
      <h2>Bienvenidos a Nuestra Tienda de Artesanías</h2>
      <p>
        Explora nuestra colección única de productos artesanales hechos a mano
        con amor y dedicación.
      </p>
      <ItemList list={products} />
    </section>
  );
};
