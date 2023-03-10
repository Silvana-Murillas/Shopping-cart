import { createContext, useState } from 'react';
import { useReducer } from 'react';
let initialState = JSON.parse(window.localStorage.getItem('cart')) || [];

function updateCart(state) {
    localStorage.setItem('cart', JSON.stringify(state));
}

function reducer(state, action) {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_PRODUCT':
            const productInCar = state.findIndex(
                (item) => item.id === payload.id
            );

            if (productInCar >= 0) {
                const newCart = structuredClone(state);
                newCart[productInCar].quantity += 1;
                updateCart(newCart);
                return newCart;
            } else {
                const newCart = [...state, { ...payload, quantity: 1 }];
                updateCart(newCart);
                return newCart;
            }

        case 'REMOVE_PRODUCT':
            const newCart = state.filter((p) => p.id !== payload.id);
            updateCart(newCart);
            return newCart;

        case 'CLEAR_PRODUCTS':
            updateCart([]);
            return [];
    }

    return state;
}

export const cartContext = createContext();

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addProduct = (product) => {
        return dispatch({ type: 'ADD_PRODUCT', payload: product });
    };
    const removeProduct = (product) => {
        return dispatch({ type: 'REMOVE_PRODUCT', payload: product });
    };
    const clearProduct = () => dispatch({ type: 'CLEAR_PRODUCTS' });
    return (
        <cartContext.Provider
            value={{ cart: state, addProduct, clearProduct, removeProduct }}
        >
            {children}
        </cartContext.Provider>
    );
}
