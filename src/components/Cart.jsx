import { useId } from 'react';
import './Cart.css';
import { useCart } from './hook/useCart';

export function Cart() {
    const car = useId();
    const { cart, clearProduct, addProduct } = useCart();
    return (
        <>
            <label className="cart-button" htmlFor={car}>
                🛒
            </label>
            <input id={car} type="checkbox" hidden></input>
            <aside className="cart">
                <ul>
                    {cart.map((p) => (
                        <li key={p.id}>
                            <img src={p.thumbnail} alt="iphone" />
                            <div>
                                <strong>{p.title}</strong> $ {p.price}
                            </div>
                            <footer>
                                <small>Quantity:{p.quantity}</small>
                                <button onClick={() => addProduct(p)}>+</button>
                            </footer>
                        </li>
                    ))}
                </ul>
                <sr />
                {cart.length ? (
                    <button onClick={() => clearProduct()}>🗑️</button>
                ) : (
                    ''
                )}
            </aside>
        </>
    );
}
