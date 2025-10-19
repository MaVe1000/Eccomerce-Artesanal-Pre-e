import React from 'react';
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./CartView.css";

const CartItem = ({ item, removeItem }) => (
    <div className="cart-item">
        <div className="item-info">
            <img src={`${item.image.replace('../', '/')}`} alt={item.name} />
            <div className="item-details">
                <h3>{item.name}</h3>
                <p>Cantidad: {item.quantity || 1}</p>
            </div>
        </div>
        <div className="item-controls">
            <span className="price">${item.price}</span>
            <button 
                className="remove-button" 
                onClick={() => removeItem(item.id)}
            >
                Quitar
            </button>
        </div>
    </div>
);


export const CartView = () => {

    const { cart, clearCart, removeItem, getTotalPrice } = useCartContext(); 

    if (!cart.length) {
        return (
            <section className="cart-view">
                <h2>Mi Carrito de Compras</h2>
                <p>Tu carrito está vacío. ¡Explora nuestras artesanías!</p>
            </section>
        );
    }
    const total = getTotalPrice();
    

    return (
        <section className="cart-view">
            <h2>Mi Carrito de Compras</h2>
            
            <div className="cart-items-list">
                {cart.map(item => (
                    <CartItem key={item.id} item={item} removeItem={removeItem} />
                ))}
            </div>

            <div className="cart-summary">
                <div className="total-info">
                    Total: ${total.toFixed(2)}
                </div>
                <div>
                    <button className="clear-button" onClick={clearCart}>
                        Vaciar Carrito
                    </button>
                    <button className="checkout-button">
                        Finalizar Compra
                    </button>
                </div>
            </div>
        </section>
    );
};