import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const exists = (id) => {
    const exist = cart.some((p) => p.id === id);
    return exist;
  };

  const addItem = (item) => {
    if (exists(item.id)) {
      alert("El producto ya existe en el carrito");
      return;
    }
    setCart([...cart, { ...item, quantity: 1 }]); 
    alert(`${item.name} agregado`);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    if (cart.length) {
      return cart.length;
    }
    return 0;
  };

  const removeItem = (id) => {
    const newCart = cart.filter((p) => p.id !== id);
    setCart(newCart);
  };
        
        const getTotalPrice = () => {
const total = cart.reduce((acc, item) => acc + item.price, 0);
return total;
        };

  const values = {
    cart,
    addItem,
    clearCart,
    getTotalItems,
    removeItem,
    getTotalPrice,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
