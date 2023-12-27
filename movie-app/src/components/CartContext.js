import React, { createContext, useState } from 'react';


// CartContext creates the cart context using reacts context API.
// It provides an array (cart) and methods to manipulate the cart
// CartProvider is a context provider which wraps components that need access to the cart
// the context is exported so other components have access and can manipulate the cart



export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        if (!cart.some(cartItem => cartItem.id === item.id)) {
            setCart([...cart, item]);
        }
    };

    const removeFromCart = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    );
};


